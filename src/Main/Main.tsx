import React, { ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Tabs, Tab, Typography, Box, Container, makeStyles, createStyles, Hidden } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { mainData } from '../data';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

// const useStyles = makeStyles((theme: Theme) =>
const useStyles = makeStyles(() =>
  createStyles({
    root: { },
    content: {
      minHeight:'calc(100vh - 450px)',
    },
    footer: {
      marginTop: 'auto'
    },
  }));

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Main = () => {
  const classes = useStyles();
  const history = useHistory();

  const currentRoute = mainData.map(m => m.path).indexOf(history.location.pathname);
  const [activeTab, setActiveTab] = useState(currentRoute);

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
    <div className={classes.root}>
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
          onChangeIndex={ (e) => setActiveTab(e) }
          // `transition...` - temp fix for animation not triggered on first index change
          // https://github.com/oliviertassinari/react-swipeable-views/issues/599
          containerStyle={{
            transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
          }}
        >
          {mainData.map(({ content }, i) =>
            <TabPanel value={activeTab} index={i} key={i}>
              {content}
            </TabPanel>
          )}
        </SwipeableViews>
      </Container>

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
