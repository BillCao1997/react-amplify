import { Button, Card, CardActions, Typography, CardContent } from '@material-ui/core';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

@observer
class Counter extends React.Component {
  @observable
  counter = 0;

  @computed
  get counterCount(): number {
    return this.counter + 1;
  }

  @action
  increment = (): void => {
    this.counter += 1;
  };

  render(): JSX.Element {
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
  }
}

export default Counter;
