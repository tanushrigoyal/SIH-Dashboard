import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Redirect } from 'react-router-dom';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui-icons/Send';
import AccountIcon from 'material-ui-icons/AccountCircle';
import {ThemeColor} from './color.js';

const styles = theme => ({
    mainContainer: {
       height: "490px",
       backgroundColor: ThemeColor,
       paddingLeft: theme.spacing.unit * 58,
       paddingTop: theme.spacing.unit * 20,
    },
    card: {
      maxWidth: "400px",
      height: "60%"

  },
  cardContent: {
      paddingLeft: theme.spacing.unit * 5,
  },
  container: {
    flexWrap: 'wrap',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  formControl: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  button: {
    paddingTop: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class ComposedTextField extends React.Component {
  state = {
    username: '',
    password: '',
    redirectToDashboard: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickShowPasssword = () => {
   this.setState({ showPassword: !this.state.showPassword });
 };

 handleLogin = () => {
     if (this.state.username === 'demo' && this.state.password === 'demo') {
         this.setState({ redirectToDashboard: true });
     }

};

  render() {
    const { classes } = this.props;
    if (this.state.redirectToDashboard) {
          return (
            <Redirect to='/home'/>
          )
      } else {
          <Redirect to='/'/>

      }

    return (
        <div className={classes.mainContainer}>
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
               <Typography variant="headline" gutterBottom>
                Login
              </Typography>
      <div className={classes.container}>
      <div style={{ gridColumnEnd: 'span 3' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Username</InputLabel>
            <Input
              id="name-simple"
              value={this.state.username}
              onChange={this.handleChange('username')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <AccountIcon />
                  </IconButton>
                </InputAdornment>
              }
            /></FormControl>
          </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Password</InputLabel>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPasssword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            </FormControl>
          </div>
        <div style={{ gridColumnEnd: 'span 3', marginTop: '5%' }}>
          <Button className={classes.button} variant="raised" color="primary" onClick = {this.handleLogin}>
         Send
         <SendIcon className={classes.rightIcon} />
         </Button>
          </div>

      </div>
          </CardContent>
      </Card>
    </div>
  );
}
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
