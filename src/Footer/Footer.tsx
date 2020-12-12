import React from 'react';
import { Theme, makeStyles, createStyles, Grid, IconButton } from '@material-ui/core';

import { footerData } from '../data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      height: 100,
      backgroundColor: theme.palette.primary.main,
    }
  }));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={ classes.footer }
    >
      {footerData.map(({ link, display, icon }, i) =>
        // <Link href={ link } key={ i } color='secondary'>{display}</Link>
        <IconButton href={ link } key={ i } target='_blank'>{ icon }</IconButton>
      )}
    </Grid>
  )
};

export default Footer;
