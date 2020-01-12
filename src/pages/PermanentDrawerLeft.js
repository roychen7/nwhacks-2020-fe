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
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './PermanentDrawerLeft.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import HomePage from './HomePage'
import SessionStatistics from './SessionStatistics';
import Scrubber from '../components/Scrubber';
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

const homePage = {
  home: {key: 'home', text: 'Home'},
  patients: {key: 'patients', text: 'Patients'},
  sessions: {key: 'sessions', text: 'Sessions'},
};

const patients = [{key: 1, name: 'Patient 1'}, {key: 2, name: 'Patient 2'} , {key: 3, name: 'Patient 3'}];

const sessions = [{key: 1, sessions: ['Session 1', 'Session 2']},
{key: 2, sessions: ['Session 1', 'Sessions 2']},
{key: 3, sessions: ['Session 3']},
{key: 4, sessions: ['Session 4']}];

class PermanentDrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      open: false,
      setOpen: false,
      opened: 'Sessions',
      selected: 'home',
      currOpenedSession: null,
    }
    // patients and session array objects 
    // patients is: 
    //     patient id
    // session object is:
    //     text: [text time, text mood, sentence]
    //     face: [face time (should be constant increments), face mood]
    //     mostFreq: list of 5 most frequently used words in descending order
    //     faces: list of face moods with counter of how many 
    //     date: string 
    //     overall score: number 

    this.patients = [];
    this.sessions = [];
  }

  renderHome = () => {
    return (
      <React.Fragment>
        <ListItem button key={homePage.home.key}>
          <ListItemIcon> <HomeIcon/> </ListItemIcon>
          <ListItemText primary={homePage.home.text} />
        </ListItem>
        <ListItem button key={homePage.patients.key}>
          <ListItemIcon> <GroupIcon/> </ListItemIcon>
          <ListItemText primary={homePage.patients.text} />
        </ListItem>
        <ListItem button key={homePage.sessions.key}>
          <ListItemIcon> <LibraryBooksIcon/> </ListItemIcon>
          <ListItemText primary={homePage.sessions.text} />
        </ListItem>
      </React.Fragment>
    );
  }
  
  renderPatients = () => {
    return (
      patients.map(item => (
        <ListItem button key={item.key}>
          <ListItemIcon> <PersonIcon/> </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))
    )
  }

  renderSessions = () => {
    
  }


  render() {
    const { classes } = this.props;
    const { open } = this.state;

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
          <List id='home' hidden={false}>
            {this.renderHome()}
          </List>
          <List id='patients' hidden={false}>
            {this.renderPatients()}
          </List>
          <List id='sessions' hidden={false}>
            {}
        </List>
        <Divider />
      </Drawer>
       <main className={classes.content}>
            {this.state.opened == 'Home' && <HomePage />}
            {this.state.opened == 'Patients' && <h1 className='filler'> Click a patient to view their summaries! </h1>}
            {this.state.opened == 'Sessions' && < SessionStatistics />}
        </main>
    </div>
  );

  }

}

export default withStyles(useStyles)(PermanentDrawerLeft);