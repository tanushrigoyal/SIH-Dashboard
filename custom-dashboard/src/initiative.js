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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

// const data = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


class Initiative extends React.Component{

    state = {
      open: false,
      name:"",
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
    name: this.state.name,
    desc: "smart city"
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
    var data = this.props.tableData;
    console.log(data);

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
        </CardContent>
        <CardActions>
        <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Initiative Name</TableCell>
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

Initiative.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Initiative);
