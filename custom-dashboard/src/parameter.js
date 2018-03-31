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
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

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
  },
  root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

class SimpleCard extends React.Component {

    state = {
        open: false,
        name: ""

    }

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

    addMoreParameters =() =>{
            // Number of inputs to create
            var number = document.getElementById("member").value;
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (var i=0;i<number;i++){
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
    initiative: initiativeId,
    name: this.state.name

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

    render(){
      const { classes, theme } = this.props;
  var initiativeId = this.props.initiativeId;
  var data = this.props.tableData;
   console.log(initiativeId);

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
           <Typography variant="headline" component="h2">
            Parameter
          </Typography>
        <Button color="primary" variant="raised" size="small" onClick={this.handleOpen} >Add Parameter</Button>

          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
           <div className={classes.paper}>
           <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Parameter Name</InputLabel>
            <Input required id="name-simple" value={this.state.name} onChange={this.handleChange('name')} />
          </FormControl>
                <Button onClick={this.createParameters(initiativeId) , this.handleClose}>Submit</Button>
            </div>
          </Modal>
          </CardContent>
         <CardActions>
         <Paper className={classes.root}>
               <Table className={classes.table}>
                 <TableHead>
                   <TableRow>
                     <TableCell>Parameter Name</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                   {data.map(n => {
                     return (
                       <TableRow key={n.id}>
                         <TableCell>{n.name}</TableCell>
                          </TableRow>
                     );
                   })}
                 </TableBody>
               </Table>
             </Paper>
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
