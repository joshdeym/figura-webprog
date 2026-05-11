import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../data/users.json?raw';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];
const statuses = ['active', 'inactive'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase()
          : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? '').trim(),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch (error) {
    return {
      users: [],
      error: 'Unable to read users from src/data/users.json.',
    };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ role: '', gender: '', status: '' });

  const resetForm = () => {
    setForm(blankForm);
    setErrors({});
  };

  const openModal = (id = null) => {
    setModal({ open: true, id: id ?? null });
    setForm(id ? users.find((u) => u.id === id) : blankForm);
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (field) => (event) => {
    setFilters((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const clearFilters = () => {
    setSearch('');
    setFilters({ role: '', gender: '', status: '' });
  };

  const validate = () => {
    const newErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim();

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact number'],
      ['email', 'Email'],
      ['role', 'Role'],
      ['username', 'Username'],
      ['password', 'Password'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        newErrors[key] = `${label} is required.`;
      }
    });

    if (!newErrors.email && !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!newErrors.email && users.some((u) => u.id !== modal.id && u.email === email)) {
      newErrors.email = 'Email address already exists.';
    }

    if (!newErrors.username && /\s/.test(username)) {
      newErrors.username = 'Username must not contain spaces.';
    }

    if (!newErrors.username && users.some((u) => u.id !== modal.id && u.username === username.toLowerCase())) {
      newErrors.username = 'Username already exists.';
    }

    if (!newErrors.age && !/^\d+$/.test(String(form.age).trim())) {
      newErrors.age = 'Age must be a number only.';
    }

    if (!newErrors.contactNumber && !/^\d{11}$/.test(String(form.contactNumber).trim())) {
      newErrors.contactNumber = 'Contact number must be 11 digits.';
    }

    if (!newErrors.password && String(form.password).trim().length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((u) => (u.id === modal.id ? { ...newUser, id: modal.id } : u))
        : [
            ...prev,
            {
              ...newUser,
              id: prev.reduce((max, u) => Math.max(max, u.id), 0) + 1,
              isActive: true,
            },
          ]
    );

    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    variant: 'filled',
    InputLabelProps: {
      style: { color: '#d1d5db' },
    },
    InputProps: {
      disableUnderline: true,
      sx: {
        backgroundColor: '#111827',
        color: '#f5f5f5',
        borderRadius: '10px',
        '& .MuiFilledInput-input': {
          color: '#f5f5f5',
        },
      },
    },
    ...extra,
  });

  const filteredUsers = users.filter((user) => {
    const searchValue = search.trim().toLowerCase();
    const matchesSearch =
      !searchValue ||
      [user.firstName, user.lastName, user.email, user.username]
        .join(' ')
        .toLowerCase()
        .includes(searchValue);

    const matchesRole = !filters.role || user.role === filters.role;
    const matchesGender = !filters.gender || user.gender === filters.gender;
    const matchesStatus =
      !filters.status ||
      (filters.status === 'active' ? user.isActive : !user.isActive);

    return matchesSearch && matchesRole && matchesGender && matchesStatus;
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: 'username', headerName: 'Username', minWidth: 150 },
    { field: 'age', headerName: 'Age', width: 80 },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 120,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 150 },
    {
      field: 'role',
      headerName: 'Role',
      width: 120,
      valueGetter: (_, row) => labelize(row.role),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'default'}
          variant={row.isActive ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row.id)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row.id)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0, backgroundColor: '#020617', color: '#f5f5f5', px: { xs: 2, md: 0 } }}>
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 700 }}>
          Users
        </Typography>
        <Button
          variant="contained"
          onClick={() => openModal()}
          sx={{
            width: { xs: '100%', sm: 'auto' },
            backgroundColor: '#ff6a00',
            color: '#000',
            '&:hover': { backgroundColor: '#ff8a3c' },
          }}
        >
          Add User
        </Button>
      </Box>

      {seed.error ? (
        <Alert
          severity="error"
          sx={{
            mb: 2,
            backgroundColor: '#111827',
            color: '#f5f5f5',
            borderColor: 'rgba(255, 106, 0, 0.35)',
          }}
        >
          {seed.error}
        </Alert>
      ) : null}

      <Paper sx={{ p: { xs: 2, sm: 3 }, minWidth: 0, overflow: 'hidden', mb: 2, backgroundColor: '#0b1220', border: '1px solid rgba(255, 106, 0, 0.25)' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <TextField
            variant="filled"
            label="Search users"
            placeholder="Search by name, email or username"
            value={search}
            onChange={handleSearchChange}
            fullWidth
            sx={{
              backgroundColor: '#111827',
              borderRadius: '10px',
            }}
            InputLabelProps={{ style: { color: '#d1d5db' } }}
            InputProps={{
              disableUnderline: true,
              sx: { color: '#f5f5f5' },
            }}
            inputProps={{ style: { color: '#f5f5f5' } }}
          />
          <TextField
            variant="filled"
            label="Role"
            select
            value={filters.role}
            onChange={handleFilterChange('role')}
            sx={{ minWidth: 160, backgroundColor: '#111827', borderRadius: '10px' }}
            InputLabelProps={{ style: { color: '#d1d5db' } }}
            InputProps={{ disableUnderline: true, sx: { color: '#f5f5f5' } }}
            inputProps={{ style: { color: '#f5f5f5' } }}
          >
            <MenuItem value="">All Roles</MenuItem>
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {labelize(role)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="filled"
            label="Gender"
            select
            value={filters.gender}
            onChange={handleFilterChange('gender')}
            sx={{ minWidth: 160, backgroundColor: '#111827', borderRadius: '10px' }}
            InputLabelProps={{ style: { color: '#d1d5db' } }}
            InputProps={{ disableUnderline: true, sx: { color: '#f5f5f5' } }}
            inputProps={{ style: { color: '#f5f5f5' } }}
          >
            <MenuItem value="">All Genders</MenuItem>
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {labelize(gender)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="filled"
            label="Status"
            select
            value={filters.status}
            onChange={handleFilterChange('status')}
            sx={{ minWidth: 160, backgroundColor: '#111827', borderRadius: '10px' }}
            InputLabelProps={{ style: { color: '#d1d5db' } }}
            InputProps={{ disableUnderline: true, sx: { color: '#f5f5f5' } }}
            inputProps={{ style: { color: '#f5f5f5' } }}
          >
            <MenuItem value="">All Status</MenuItem>
            {statuses.map((status) => (
              <MenuItem key={status} value={status}>
                {labelize(status)}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="outlined"
            onClick={clearFilters}
            sx={{ color: '#ff6a00', borderColor: '#ff6a00', whiteSpace: 'nowrap' }}
          >
            Clear
          </Button>
        </Stack>
        <Typography variant="body2" sx={{ color: '#d1d5db' }}>
          Search and filter users by first name, last name, email, username, role, gender, or status.
        </Typography>
      </Paper>

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden', backgroundColor: '#0b1220', border: '1px solid rgba(255, 106, 0, 0.25)' }}>
        {filteredUsers.length ? (
          <Box sx={{ height: { xs: 450, sm: 530 }, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: { paginationModel: { pageSize: 5, page: 0 } },
              }}
              sx={{
                borderWidth: 0,
                bgcolor: '#0b1220',
                color: '#f5f5f5',
                '& .MuiDataGrid-footerContainer, & .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#111827',
                },
                '& .MuiDataGrid-columnHeaders': {
                  color: '#f5f5f5',
                  borderBottom: '1px solid rgba(255, 106, 0, 0.25)',
                },
                '& .MuiDataGrid-cell': {
                  borderBottom: '1px solid rgba(255, 106, 0, 0.12)',
                  color: '#e5e7eb',
                },
                '& .MuiDataGrid-row:hover': {
                  backgroundColor: 'rgba(255, 106, 0, 0.08)',
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: '1px solid rgba(255, 106, 0, 0.25)',
                },
                '& .MuiDataGrid-virtualScroller': {
                  backgroundColor: '#0b1220',
                },
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': {
                  outline: 'none',
                },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info">
            No users found. Use Add User to create your first record.
          </Alert>
        )}
      </Paper>

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        PaperProps={{
          sx: {
            backgroundColor: '#0b1220',
            color: '#f5f5f5',
            border: '1px solid rgba(255, 106, 0, 0.25)',
          },
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <DialogTitle sx={{ color: '#f5f5f5', backgroundColor: '#111827' }}>
            {modal.id ? 'Edit User' : 'Add User'}
          </DialogTitle>
          <DialogContent sx={{ gap: 2, px: 3, py: 1, backgroundColor: '#0b1220', color: '#f5f5f5' }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age')} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('role', 'Role', { select: true })}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {labelize(role)}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField {...fieldProps('username', 'Username')} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  InputProps: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() => setShowPassword((prev) => !prev)}
                          onMouseDown={(event) => event.preventDefault()}
                          aria-label="toggle password visibility"
                        >
                          <VisibilityOff />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                })}
              />
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 2 })} />
              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                }
                label={form.isActive ? 'User status: Active' : 'User status: Inactive'}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2, backgroundColor: '#111827' }}>
            <Button sx={{ color: '#f5f5f5' }} onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff6a00', color: '#000', '&:hover': { backgroundColor: '#ff8a3c' } }}>
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;