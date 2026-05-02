import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

function ReportsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          <ListItem>
            <ListItemText primary="Monthly Sales Report" secondary="Revenue and growth by region" />
          </ListItem>
          <ListItem>
            <ListItemText primary="User Activity Report" secondary="Most active users this month" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Inventory Status" secondary="Stock and reorder alerts" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default ReportsPage;
