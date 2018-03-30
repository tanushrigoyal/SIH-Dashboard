import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InitiativeIcon from 'material-ui-icons/Book';
import ParameterIcon from 'material-ui-icons/NoteAdd';
import RatingIcon from 'material-ui-icons/Stars';
import UserIcon from 'material-ui-icons/AccountBox';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Initiative from './initiative';
import Parameter from './parameter';
import Dashboard from './dashboard';
import User from './user';
import Rating from './rating';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

const drawerWidth = 240;

var data = [];

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    showDasboard: true,
    showParameter: false,
    showInitiative: false,
    showUser: false,
    showRating: false,
    tableData: [],
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  initiativeClick = () => {
    this.setState({
      showInitiative: true,
      showParameter: false,
      showDasboard: false,
      showUser: false,
      showRating: false,
    });
        let self = this;
      axios.get('https://aicte.herokuapp.com/initiative')
      .then(function (response) {
        console.log(response.data.length);

        for(var i=0;i<response.data.length;i++){
           data.push({id:response.data[i].id ,name: response.data[i].name});
        }
        console.log(data);
        self.setState({
            tableData: data,
        })

      })
      .catch(function (error) {
        console.log(error);
      });


  }

  parameterClick = () => {
    this.setState({
      showInitiative: false,
      showParameter: true,
      showDasboard: false,
      showUser: false,
      showRating: false,
    });
  }

  userClick = () => {
    this.setState({
      showInitiative: false,
      showParameter: false,
      showDasboard: false,
      showUser: true,
      showRating: false,
    });
  }

  ratingClick = () => {
    this.setState({
      showInitiative: false,
      showParameter: false,
      showDasboard: false,
      showUser: false,
      showRating: true,
    });
  }


  render() {
    const { classes, theme } = this.props;
    var displayComponent;

    var tableData = data;


    if (this.state.showInitiative) {
     displayComponent = <Initiative tableData={this.state.tableData}/>;
 } else if (this.state.showParameter){
     displayComponent = <Parameter />;
 } else if (this.state.showUser){
        displayComponent = <User />;
    } else if (this.state.showRating){
           displayComponent = <Rating />;
          } else {
        displayComponent = <Dashboard />;
    }

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              AICTE Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List component="nav">
            <ListItem button onClick={this.initiativeClick}>
             <ListItemIcon>
                <InitiativeIcon />
              </ListItemIcon>
              <ListItemText primary="Initiative" />
            </ListItem>
            <ListItem button onClick={this.parameterClick}>
              <ListItemIcon>
                <ParameterIcon />
              </ListItemIcon>
              <ListItemText primary="Parameter" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button onClick={this.ratingClick}>
            <ListItemIcon>
              <RatingIcon />
            </ListItemIcon>
            <ListItemText primary="Rating" />
            </ListItem>
            <ListItem button onClick={this.userClick}>
            <ListItemIcon>
              <UserIcon />
            </ListItemIcon>
           <ListItemText primary="User" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {displayComponent}

        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
