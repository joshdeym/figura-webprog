import { Box, Typography, Grid, Card, CardContent, TextField, Button, InputAdornment } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const userColumns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', flex: 1, minWidth: 180 },
  { field: 'email', headerName: 'Email', flex: 1, minWidth: 220 },
  { field: 'role', headerName: 'Role', width: 140 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'lastLogin', headerName: 'Last Login', width: 150 },
];

const userRows = [
  { id: 1, name: 'Jon Snow', email: 'jon.snow@example.com', role: 'Admin', status: 'Active', lastLogin: 'Today' },
  { id: 2, name: 'Cersei Lannister', email: 'cersei.lannister@example.com', role: 'Manager', status: 'Active', lastLogin: '2h ago' },
  { id: 3, name: 'Jaime Lannister', email: 'jaime.lannister@example.com', role: 'Editor', status: 'Pending', lastLogin: 'Yesterday' },
  { id: 4, name: 'Arya Stark', email: 'arya.stark@example.com', role: 'Support', status: 'Active', lastLogin: 'Today' },
  { id: 5, name: 'Daenerys Targaryen', email: 'daenerys@example.com', role: 'Owner', status: 'Active', lastLogin: '3d ago' },
  { id: 6, name: 'Tyrion Lannister', email: 'tyrion.lannister@example.com', role: 'Analyst', status: 'Inactive', lastLogin: '1w ago' },
  { id: 7, name: 'Sansa Stark', email: 'sansa.stark@example.com', role: 'Manager', status: 'Active', lastLogin: '5h ago' },
  { id: 8, name: 'Bran Stark', email: 'bran.stark@example.com', role: 'Viewer', status: 'Active', lastLogin: '2d ago' },
];

function UsersPage() {
  return (
    <Box sx={{ maxWidth: '1600px', mx: 'auto', p: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Users
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage user accounts, review status, and track recent activity.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 130 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {userRows.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 130 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Active Users
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                6
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ minHeight: 130 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Pending Invitations
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 2, mb: 3 }}>
            <TextField
              placeholder="Search users..."
              size="small"
              sx={{ width: { xs: '100%', sm: 320 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" startIcon={<PersonAddIcon />} sx={{ minWidth: 160 }}>
              Add user
            </Button>
          </Box>
          <Box sx={{ height: 520, width: '100%' }}>
            <DataGrid
              rows={userRows}
              columns={userColumns}
              pageSizeOptions={[5, 8]}
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              checkboxSelection
              disableRowSelectionOnClick
              sx={{
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#f8fafc',
                },
                '& .MuiDataGrid-row:hover': {
                  backgroundColor: '#f1f5f9',
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UsersPage;
