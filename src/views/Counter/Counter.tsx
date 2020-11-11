import { Button, Card, CardActions, Typography, CardContent } from '@material-ui/core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

@observer
class Counter extends React.Component {
  @observable
  counter = 0;

  @action
  increment = (): void => {
    this.counter += 1;
    console.log(this.counter);
  };

  render = (): React.ReactNode => {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">Test Card</Typography>
          <Typography variant="body2">You clicked on button for {this.counter} times</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" style={{ margin: 'auto' }} onClick={this.increment}>
            Click
          </Button>
        </CardActions>
      </Card>
    );
  };
}

export default Counter;
