import { Box, Typography, Grid, Card, CardContent, Chip, Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';

const reportColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Report Title', flex: 1, minWidth: 180 },
  { field: 'type', headerName: 'Type', width: 140 },
  { field: 'owner', headerName: 'Owner', width: 160 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'updated', headerName: 'Updated', width: 140 },
];

const reportRows = [
  { id: 1, title: 'Monthly Sales Summary', type: 'Sales', owner: 'Alicia', status: 'Completed', updated: 'Today' },
  { id: 2, title: 'User Engagement', type: 'Analytics', owner: 'Ramon', status: 'In Progress', updated: '2h ago' },
  { id: 3, title: 'Inventory Health', type: 'Inventory', owner: 'Mia', status: 'Completed', updated: 'Yesterday' },
  { id: 4, title: 'Conversion Trends', type: 'Marketing', owner: 'Nico', status: 'Review', updated: '3d ago' },
  { id: 5, title: 'Support Ticket Flow', type: 'Operations', owner: 'Jade', status: 'Scheduled', updated: '4d ago' },
  { id: 6, title: 'Revenue Forecast', type: 'Finance', owner: 'Lina', status: 'In Progress', updated: 'Today' },
];

function ReportsPage() {
  return (
    <Box sx={{ maxWidth: '1600px', mx: 'auto', p: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Reports Overview
        </Typography>
        <Typography variant="body2" color="text.secondary">
          View charts, insights, and the latest report activity in one place.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 140 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Total Reports
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {reportRows.length}
              </Typography>
              <Chip label="Updated daily" size="small" sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 140 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Completed Reports
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                4
              </Typography>
              <Chip label="Strong momentum" size="small" color="success" sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ minHeight: 140 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Average Review Time
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                7.8 hrs
              </Typography>
              <Chip label="On track" size="small" color="primary" sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={7}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Report volume by quarter
            </Typography>
            <Box sx={{ width: '100%', minHeight: 340 }}>
              <BarChart
                series={[
                  { data: [18, 24, 30, 28], label: 'Generated', color: '#4f46e5' },
                  { data: [15, 20, 26, 24], label: 'Reviewed', color: '#06b6d4' },
                ]}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                height={340}
                margin={{ top: 10, right: 20, bottom: 30, left: 50 }}
                slotProps={{
                  legend: {
                    position: { vAlign: 'top', hAlign: 'right' },
                  },
                }}
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Report categories
            </Typography>
            <Box sx={{ width: '100%', minHeight: 340 }}>
              <PieChart
                series={[
                  { data: [
                      { id: 0, value: 32, label: 'Sales', color: '#4f46e5' },
                      { id: 1, value: 24, label: 'Analytics', color: '#06b6d4' },
                      { id: 2, value: 18, label: 'Inventory', color: '#10b981' },
                      { id: 3, value: 14, label: 'Marketing', color: '#f59e0b' },
                      { id: 4, value: 12, label: 'Operations', color: '#8b5cf6' },
                    ] },
                ]}
                width={400}
                height={340}
                margin={{ top: 10, bottom: 10, left: 20, right: 20 }}
                slotProps={{
                  legend: {
                    position: { vAlign: 'bottom', hAlign: 'middle' },
                    direction: 'row',
                  },
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Latest reports
          </Typography>
          <Box sx={{ height: 430, width: '100%' }}>
            <DataGrid
              rows={reportRows}
              columns={reportColumns}
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

export default ReportsPage;
