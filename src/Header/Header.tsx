import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core';

import martinFramed from '../assets/martin-framed.png'
// import { ReactComponent as MartinSVG } from '../assets/martin.svg'

const Header = () => {
  return (
    <Box textAlign='center' mt={ 2 } mb={ 3 }>
      <RouterLink to='/'>
        <img src={martinFramed} alt='martin'/>
      </RouterLink>
      <Typography variant='h1'>Martin's Extra Special Bitters</Typography>
    </Box>
  )
};

export default Header;
