import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

function UsersPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          <ListItem>
            <ListItemText primary="Jon Snow" secondary="Admin" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cersei Lannister" secondary="Manager" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Arya Stark" secondary="Customer" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default UsersPage;
