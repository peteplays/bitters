import React from 'react';
import { Grid, Button } from '@material-ui/core';

const Buy = ({setBuyDialogOpen}: {setBuyDialogOpen: CallableFunction}) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h2>Martin's Extra Special Bitters</h2>
      <Button
        variant='outlined'
        onClick={() =>setBuyDialogOpen(true)}
      >
        Buying options
      </Button>
    </Grid>
  )
}

export default Buy;
