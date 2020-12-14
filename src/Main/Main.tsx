import React, { ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Tabs, Tab, Typography, Box, Container, makeStyles, createStyles, Theme, Hidden, Fab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { mainData } from '../data';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Buy from './Buy/Buy';
import BuyDialog from './BuyDialog/BuyDialog';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight:'calc(100vh - 447px)',
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(2),
    },
  }));

const TabPanel = ({ children, value, index }: TabPanelProps) => (
  <div
    role='tabpanel'
    hidden={value !== index}
  >
    {value === index && (
      <Box p={3}>
        {children}
      </Box>
    )}
  </div>
);

const Main = () => {
  const classes = useStyles();
  const history = useHistory();

  const currentRoute = mainData.map(m => m.path).indexOf(history.location.pathname);
  const [activeTab, setActiveTab] = useState(currentRoute);
  const [buyDialogOpen, setBuyDialogOpen] = useState(false);

  const handleRouteChange = (selectTab: number) => {
    history.push(mainData.map(m => m.path)[selectTab]);
    setActiveTab(selectTab);
  }

  const buildAppBar = () =>
    <AppBar position='static'>
      <Tabs
        value={ activeTab }
        onChange={ (_, val) => setActiveTab(val) }
        centered
      >
        { mainData.map(({ name, path }, i) =>
          <Tab
            key={ i }
            label={ name }
            onClick={ () => history.push(path) }
          />
        ) }
      </Tabs>
    </AppBar>;

  return (
    <>
      <Header />

      <Hidden smUp>
        { buildAppBar() }
      </Hidden>

      <Container maxWidth='md' className={classes.content}>
        <Hidden xsDown>
          { buildAppBar() }
        </Hidden>

        <SwipeableViews
          index={ activeTab }
          onChangeIndex={handleRouteChange}
          // `transition...` - temp fix for animation not triggered on first index change
          // https://github.com/oliviertassinari/react-swipeable-views/issues/599
          containerStyle={{
            transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
          }}
        >
          { mainData.map(({ name, content }, i) =>
            <TabPanel value={activeTab} index={i} key={i}>
              <Typography>{content}</Typography>

              { name === 'The Bitters' &&
                <Buy setBuyDialogOpen={ setBuyDialogOpen } />
              }
            </TabPanel>
          )}
        </SwipeableViews>
      </Container>

      <Fab
        color='secondary'
        aria-label='shopping cart'
        className={ classes.fab }
        onClick={ () => setBuyDialogOpen(true) }
      >
        <ShoppingCartIcon/>
      </Fab>

      <Footer />

      <BuyDialog buyDialogOpen={ buyDialogOpen } setBuyDialogOpen={ setBuyDialogOpen } />
    </>
  );
}

export default Main;
