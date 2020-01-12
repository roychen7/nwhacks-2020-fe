import React from 'react';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import './PermanentDrawerLeft.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import SessionStatistics from './SessionStatistics'
const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  hide: {
    display: 'none',
  },
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
});

// patient = {
//   id: patientID
// }

// session = {
//   id: sessionID
//   stats: //todo
// }

class PermanentDrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      open: false,
      setOpen: false,
    }
  }

  updateId = () => {
    this.setState({
      id: this.state.id + 1
    })
  }

render() {
  const { classes } = this.props;
  const { open, setOpen} = this.state;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        {/* <List>
          {
            [''].map((text, index) => (
              <ListItem button onClick={this.updateId}>
                <ListItemIcon> <ArrowBackIosIcon /> </ListItemIcon>
              </ListItem>
            ))
          }
        </List> */}
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.updateId}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <ArrowBackIosIcon />
          </IconButton>
        <List>
          {['Patient 1', 'Patient 2', 'Patient 3', 'Patient 4'].map((text, index) => (
            <ListItem button key={text} onClick={this.updateId}>
              <ListItemIcon> <PersonIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      { <main className={classes.content}>
            {/* <h1 className='filler'> Click a patient to view their summaries! </h1>  */}
            < SessionStatistics />
        </main>}
    </div>
  );

}

}

export default withStyles(useStyles)(PermanentDrawerLeft);