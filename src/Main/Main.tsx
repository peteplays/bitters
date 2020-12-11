import React, { ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Tabs, Tab, Typography, Box, Container, Theme, makeStyles, createStyles, Hidden } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import data from '../data';
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

  const [activeTab, setActiveTab] = useState(0);

  const buildAppBar = () =>
    <AppBar position='static'>
      <Tabs
        value={ activeTab }
        onChange={ (_, val) => setActiveTab(val) }
        centered
      >
        { data.map(({ name, path }, i) =>
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

        <SwipeableViews index={activeTab} onChangeIndex={(e) => setActiveTab(e)}>
          {data.map(({ content }, i) =>
            <TabPanel value={i} index={i} key={i}>
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
