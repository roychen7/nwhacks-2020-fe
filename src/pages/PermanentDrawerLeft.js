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
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './PermanentDrawerLeft.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomePage from './HomePage'
import SessionStatistics from './SessionStatistics';
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

// const sessions = [{key: 1, sessions: ['Session 1', 'Session 2']},
// {key: 2, sessions: ['Session 1', 'Sessions 2']},
// {key: 3, sessions: ['Session 3']},
// {key: 4, sessions: ['Session 4']}];

// patient = {
//   id: patientID
// }

// session = {
//   id: sessionID
//   stats: //todo
// }


// opened is one of:
// Home
// Patients
// Sessions

class PermanentDrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      open: false,
      setOpen: false,
      opened: 'Home',
      currOpenedSession: null,
      sessions: null,
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
    this.sessionInfo = [];
    this.sessionInfo['1'] = 'asdf';
  }

  renderHome = () => {
    return (
      <React.Fragment>
        {/* <ListItem button key={homePage.home.key}>
          <ListItemIcon> <HomeIcon/> </ListItemIcon>
          <ListItemText primary={homePage.home.text} />
        </ListItem> */}
        <ListItem button key={homePage.patients.key} onClick={this.handlePatientButtonClick}>
          <ListItemIcon> <GroupIcon/> </ListItemIcon>
          <ListItemText primary={homePage.patients.text} />
        </ListItem>
        {/* <ListItem button key={homePage.sessions.key}>
          <ListItemIcon> <LibraryBooksIcon/> </ListItemIcon>
          <ListItemText primary={homePage.sessions.text} />
        </ListItem> */}
      </React.Fragment>
    );
  }

  renderPatients = () => {
    return (
      // hardcoded patients
      patients.map(item => (
        <ListItem button key={item.key} onClick={() => {
          this.handlePatientClickRender(item.name.split(' ')[1])
        }}>
          <ListItemIcon> <PersonIcon/> </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))
    )
  }

  renderSessions = () => {
    return (
      this.state.sessions.map(sessionString => (
        <ListItem button onClick={() => {
          this.handleSessionClick(sessionString.split(' ')[1])
        }}>
          <ListItemIcon> <LibraryBooksIcon/> </ListItemIcon>
          <ListItemText primary={sessionString} />
        </ListItem>
      ))
    )
  }

  handleSessionClick = sessionId => {
      console.log(sessionId);
  }

  handlePatientButtonClick = () => {
    this.setState({
      opened: 'Patients'
    })
  }

  handlePatientClickRender = (patientId) => {
    console.log(patientId)
    this.setState({
      opened: 'Sessions',
      sessions: ['Session 1', 'Session 2', 'Session 3', 'Session 4']
    })
  }

  renderBackButton= () => {
    return (
      <ListItem button key='' onClick={this.handleBackButtonClick}>
          <ListItemIcon> <ArrowBackIosIcon/> </ListItemIcon>
      </ListItem>
    )
  }

  handleBackButtonClick = () => {
    if (this.state.opened === 'Sessions') {
      this.setState({
        opened: 'Patients',
      })
    } else if (this.state.opened === 'Patients') {
      this.setState({
        opened: 'Home',
      })
    }
  }


  render() {
    console.log(this.state.opened)
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
            {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.updateId}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              > */}
                {this.state.opened != 'Home' && <List id='back-button' hidden={false}> {this.renderBackButton()} </List>}
                {this.state.opened === 'Home' && <List id='home' hidden={false}> {this.renderHome()} </List>}
                {this.state.opened === 'Patients' && <List id='patients' hidden={false}>{this.renderPatients()}</List>}
                {this.state.opened === 'Sessions' && <List id='sessions' hidden={false}> {this.renderSessions()}</List>}
              {/* </IconButton> */}
            {/* <List id='home' hidden={false}>
              {this.renderHome()}
            </List>*/}
          <Divider />
        </Drawer>
        { <main className={classes.content}>
              {this.state.opened == 'Home' && <HomePage />}
              {this.state.opened == 'Patients' && <h1 className='filler'> Click a patient to view their summaries! </h1>}
              {this.state.opened == 'Sessions' && < SessionStatistics />}
          </main>}
      </div>
    );
  }
}

export default withStyles(useStyles)(PermanentDrawerLeft);