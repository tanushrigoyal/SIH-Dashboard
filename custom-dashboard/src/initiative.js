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

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
        <Typography variant="headline" component="h2">
            Initiative
          </Typography>
        <Button color="primary" variant="raised" size="small">Create</Button>
        <Button color="primary" variant="raised" size="small">Show Initiatives</Button>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
