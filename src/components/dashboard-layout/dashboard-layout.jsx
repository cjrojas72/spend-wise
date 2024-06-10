import React from 'react';
import { Grid, Container, Paper } from '@mui/material';

const DashboardGridLayout = ({children}) => {
  return (
    <Container maxWidth="xl"> {/* Set maximum width to extra large (xl) */}
      <Grid container spacing={3}>
        <Grid item xs={12}> {/* Main content */}
          <div style={{ padding: '20px' }}>
            {children}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardGridLayout;
