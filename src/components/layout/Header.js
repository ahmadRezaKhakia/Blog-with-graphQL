import React from 'react';
import { AppBar, Toolbar, Typography , Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
          <AppBar position='sticky'>
              <Container maxWidth = 'lg'>                 
                <Toolbar>
            <Typography component='h1' variant='h5' fontWeight='700' flex={1}>
              <Link to='/' style={{textDecoration:'none',color:'#fff'}}>وبلاگ شخصی من </Link>
            </Typography>
            <Link to='/' style={{color:'#fff'}}><BookIcon/></Link>
                </Toolbar>
              </Container>
          </AppBar>
    </div>
  )
}

export default Header;