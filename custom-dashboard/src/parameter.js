import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
  }
};

class SimpleCard extends React.Component {
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
          <Button size="small">Learn More</Button>
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
