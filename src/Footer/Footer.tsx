import React, { ReactElement } from 'react';
import { Theme, makeStyles, createStyles, Grid, Link, IconButton } from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';

interface IFooterData {
  link: string;
  display: string;
  icon: ReactElement;
}
const data: IFooterData[] = [
  {
    link: 'mailto:fake@email.com',
    display: 'Email TBD',
    icon: <MailOutlineIcon />,
  },
    {
    link: 'https://www.instagram.com/',
    display: 'Instagram TBD',
    icon: <InstagramIcon />,
  },
      {
    link: 'https://www.peteplays.com/',
    display: 'Web Site TBD',
    icon: <LanguageIcon />,
  }
]

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
      {data.map(({ link, display, icon }, i) =>
        // <Link href={ link } key={ i } color='secondary'>{display}</Link>
        <IconButton href={ link } key={ i } target='_blank'>{ icon }</IconButton>
      )}
    </Grid>
  )
};

export default Footer;
