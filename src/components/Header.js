import React from 'react';

import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Badge,
  InputBase
} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBuddleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettiingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles(theme=>({
  root:{
    backgroundColor: '#fff',
  },
  searchInput:{
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '1.1rem',
    '&:hover':{
      backgroundColor:'#f2f2f2'
    }
  },
  shape:{
    borderRadius:'12px'
  },
  '& .MuiSvgIcon-root':{
     marginRight: `theme.spacing(1)`
  }
}));


const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase placeholder="Search topics" startAdornment={<SearchIcon fontSize="small" />} className={classes.searchInput}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small"/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBuddleOutlineIcon fontSize="small"/>
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettiingsNewIcon fontSize="small"/>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
