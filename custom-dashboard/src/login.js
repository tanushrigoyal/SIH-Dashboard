import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Redirect } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui-icons/Send';

const styles = theme => ({
    card: {
      minWidth: 275,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  button: {
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
        <div>
          <Card className={classes.card}>
            <CardContent>
               <Typography variant="headline" component="h2">
                Login
              </Typography>
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-simple">Username</InputLabel>
          <Input required id="name-simple" value={this.state.username} onChange={this.handleChange('username')} />
        </FormControl>
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
          <Button className={classes.button} variant="raised" color="primary" onClick = {this.handleLogin}>
        Send
        <SendIcon className={classes.rightIcon} />
      </Button>
      </div>
          </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
