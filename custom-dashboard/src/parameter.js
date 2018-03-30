import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import axios from 'axios';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
  }
};

class SimpleCard extends React.Component {

    handleOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    addMoreParameters =() =>{
            // Number of inputs to create
            var number = document.getElementById("member").value;
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
                // Append a node with a random text
                container.appendChild(document.createTextNode("Member " + (i+1)));
                // Create an <input> element, set its type and name attributes
                var input = document.createElement("input");
                input.type = "text";
                input.name = "member" + i;
                container.appendChild(input);
                // Append a line break
                container.appendChild(document.createElement("br"));
            }
    }

createParameters = (initiativeId) => {
    axios.post('https://aicte.herokuapp.com/parameter', {
    name: this.state.name,
    initiative: initiativeId
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
  var initiativeId = this.props.initiativeId;
  console.log(initiativeId);

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
           <Typography variant="headline" component="h2">
            Parameter
          </Typography>
          </CardContent>
        <CardActions>
          <Button size="small" onClick={this.handleOpen}>Add</Button>
          <Modal  aria-labelledby="simple-modal-title"
           aria-describedby="simple-modal-description"
           open={this.state.open} onClose={this.handleClose}>
           <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Enter Name of Parameter</InputLabel>
            <Input required id="name-simple" id="member" name="member" value={this.state.name} onChange={this.handleChange('name')} />
          </FormControl>
          <div id="container"/>
          <Button onClick={this.addMoreParameters}>Add More Parameters</Button>
              <Button onClick={this.createParameters(initiativeId)}>Submit</Button>
            </div>
          <Modal>
        </CardActions>
      </Card>
    </div>
  );
}
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
