import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';
import Modal from 'material-ui/Modal';
import TextField from 'material-ui/TextField';
import {FormLabel, FormControl} from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';


/*function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}*/

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  card: {
    minWidth: 275,
  }
});

class Initiative extends React.Component{

    state = {
      open: false,
      name:""
    };
    
  
  handleOpen = () => {
    this.setState({ open: true });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

createInitiative = () => {
  this.setState({ open: false });
  console.log(this.state.name);
  axios.post('https://aicte.herokuapp.com/initiative', {
    owner: '1',
    name: this.state.name
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  render(){
    const { classes, theme } = this.props;
    return (
    <div>
      <Card className={classes.card}>
        <CardContent>
        <Typography variant="headline" component="h2">
            Initiative
          </Typography>
        <Button color="primary" variant="raised" size="small" onClick={this.handleOpen}/*onClick={CreateInitiative}*/ >Create</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
         <div className={classes.paper}>
         <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-simple">Enter Name</InputLabel>
          <Input required id="name-simple" value={this.state.name} onChange={this.handleChange('name')} />
        </FormControl>
            
            <Button onClick={this.createInitiative}>Submit</Button>
          </div>
        </Modal>
        <Button color="primary" variant="raised" size="small">Show Initiatives</Button>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>
  );
  }
}

Initiative.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Initiative);
