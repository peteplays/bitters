import React, { forwardRef, ReactElement, Ref } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const BuyDialog = ({ buyDialogOpen, setBuyDialogOpen }: { buyDialogOpen: boolean, setBuyDialogOpen: CallableFunction }) => (
  <Dialog
    open={ buyDialogOpen }
    TransitionComponent={ Transition }
    keepMounted
    onClose={ () => setBuyDialogOpen(false) }
    aria-labelledby='buy-dialog-title'
    aria-describedby='buy-dialog-description'
  >
    <DialogTitle id='buy-dialog-title'>
      Martin's Extra Special Bitters
    </DialogTitle>
    <DialogContent>
      <DialogContentText id='buy-dialog-description'>
        Follow this link to purchase Martin's Extra Special Bitters
      </DialogContentText>
      <Box textAlign='center' mt={2} fontSize='h4.fontSize'>
        <Link href='https://peteplays.com' target="_blank">The place</Link>
      </Box>
    </DialogContent>
    <DialogActions>
      <Button onClick={ () => setBuyDialogOpen(false) } color='primary'>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default BuyDialog;
