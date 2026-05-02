import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography, Card, CardContent, Button, Chip, ThemeProvider, createTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Modern dashboard theme
const dashboardTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4f46e5',
            light: '#6366f1',
            dark: '#4338ca',
        },
        secondary: {
            main: '#06b6d4',
        },
        success: {
            main: '#10b981',
        },
        warning: {
            main: '#f59e0b',
        },
        error: {
            main: '#ef4444',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#1e293b',
            secondary: '#64748b',
        },
        divider: '#e2e8f0',
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h3: {
            fontWeight: 700,
            fontSize: '1.875rem',
            letterSpacing: '-0.5px',
            marginBottom: '2rem',
            color: '#0f172a',
        },
        h5: {
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '-0.25px',
            color: '#1e293b',
        },
        h6: {
            fontWeight: 600,
            fontSize: '0.875rem',
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
        },
        body2: {
            fontSize: '0.875rem',
            color: '#64748b',
            lineHeight: 1.5,
        },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
                    border: '1px solid #f1f5f9',
                    '&:hover': {
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.3s ease',
                    },
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                },
                columnHeader: {
                    backgroundColor: '#f8fafc',
                    fontWeight: 700,
                    color: '#1e293b',
                    borderColor: '#e2e8f0',
                },
                row: {
                    '&:hover': {
                        backgroundColor: '#f0f9ff',
                    },
                    borderColor: '#e2e8f0',
                },
                cell: {
                    color: '#1e293b',
                    borderColor: '#f1f5f9',
                },
            },
        },
    },
});

const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'left' },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 140,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 140,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 100,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full Name',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
    const location = useLocation();

    const avgAge = (
        rows.reduce((sum, row) => sum + (row.age || 0), 0) /
        rows.filter((row) => row.age !== null).length
    ).toFixed(1);

    return (
        <ThemeProvider theme={dashboardTheme}>
            <Box sx={{ maxWidth: '1600px', mx: 'auto' }}>
                {/* Page Header */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h3">Dashboard</Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                        Welcome back! Here's your performance overview.
                    </Typography>
                </Box>

                {/* Summary Cards Section */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {/* Total Users Card */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ p: 3, background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Box>
                                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                                        Total Users
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '2rem',
                                            color: '#4f46e5',
                                        }}
                                    >
                                        {rows.length}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5 }}>
                                        <TrendingUpIcon sx={{ fontSize: '1rem', color: '#10b981', mr: 0.5 }} />
                                        <Typography variant="body2" sx={{ color: '#10b981' }}>
                                            12% increase
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Average Age Card */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ p: 3, background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Box>
                                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                                        Average Age
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '2rem',
                                            color: '#06b6d4',
                                        }}
                                    >
                                        {avgAge}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5 }}>
                                        <Chip
                                            label="Current"
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                height: '24px',
                                                borderColor: '#cbd5e1',
                                                color: '#64748b',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Active Status Card */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ p: 3, background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Box>
                                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                                        Active Users
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '2rem',
                                            color: '#10b981',
                                        }}
                                    >
                                        {Math.round(rows.length * 0.85)}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5 }}>
                                        <Box
                                            sx={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                backgroundColor: '#10b981',
                                                mr: 0.5,
                                            }}
                                        />
                                        <Typography variant="body2" sx={{ color: '#10b981' }}>
                                            Last 24h
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>

                {/* Charts Section */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {/* Progress Gauges */}
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                Performance Metrics
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Gauge
                                        width={140}
                                        height={140}
                                        value={50}
                                        startAngle={-110}
                                        endAngle={110}
                                        sx={{
                                            '& .MuiGauge-arc': {
                                                stroke: '#4f46e5',
                                            },
                                            '& .MuiGauge-valueText': {
                                                fill: '#4f46e5',
                                            },
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        Performance
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Gauge
                                        width={140}
                                        height={140}
                                        value={75}
                                        startAngle={-110}
                                        endAngle={110}
                                        valueMin={0}
                                        valueMax={100}
                                        sx={{
                                            '& .MuiGauge-arc': {
                                                stroke: '#06b6d4',
                                            },
                                            '& .MuiGauge-valueText': {
                                                fill: '#06b6d4',
                                            },
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        Engagement
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Pie Chart */}
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ mb: 3, width: '100%' }}>
                                Category Distribution
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 30, label: 'Premium', color: '#4f46e5' },
                                            { id: 1, value: 25, label: 'Standard', color: '#06b6d4' },
                                            { id: 2, value: 20, label: 'Basic', color: '#10b981' },
                                        ],
                                    },
                                ]}
                                width={380}
                                height={250}
                                margin={{ top: 10, bottom: 10, left: 50, right: 50 }}
                                slotProps={{
                                    legend: {
                                        direction: 'row',
                                        position: { vAlign: 'bottom', hAlign: 'middle' },
                                    },
                                }}
                            />
                        </Card>
                    </Grid>
                </Grid>

                {/* Bar Chart */}
                <Card sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Quarterly Performance
                    </Typography>
                    <Box sx={{ overflowX: 'auto' }}>
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34], label: 'Sales', color: '#4f46e5' },
                                { data: [51, 6, 49, 30], label: 'Revenue', color: '#06b6d4' },
                            ]}
                            height={350}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 60, right: 10 }}
                            slotProps={{
                                legend: {
                                    direction: 'row',
                                    position: { vAlign: 'top', hAlign: 'right' },
                                },
                            }}
                        />
                    </Box>
                </Card>

                {/* Users Table Section */}
                <Card sx={{ mb: 4, p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Users Overview
                    </Typography>
                    <Box sx={{ height: 450, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            experimentalFeatures={{ newEditingApi: true }}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 8,
                                    },
                                },
                            }}
                            pageSizeOptions={[5, 8, 10]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            sx={{
                                '& .MuiDataGrid-root': {
                                    border: 'none',
                                },
                                '& .MuiDataGrid-cell': {
                                    paddingY: 1.5,
                                },
                                '& .MuiDataGrid-columnHeaders': {
                                    backgroundColor: '#f8fafc',
                                    borderBottom: '1px solid #e2e8f0',
                                },
                            }}
                        />
                    </Box>
                </Card>

                {/* Map Section */}
                <Card sx={{ p: 3, overflow: 'hidden' }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Location Map
                    </Typography>
                    <Box sx={{ height: 500, width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                        <MapContainer center={[14.604253, 120.984164]} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[14.604253, 120.984164]}>
                                <Popup>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            National University Manila
                                        </Typography>
                                        <Typography variant="body2">
                                            551 M.F. Jhocson St, Sampaloc,<br />
                                            Manila, 1008 Metro Manila
                                        </Typography>
                                    </Box>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default DashboardPage;