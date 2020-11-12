import { Button, Card, CardActions, Typography, CardContent, TextField, List } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { createCounting, deleteCounting } from 'graphql/mutations';
import { listCountings } from 'graphql/queries';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

interface IEntry {
  id?: string;
  name: string;
  number: number;
}

@observer
class Counter extends React.Component {
  @observable
  counter = 0;

  @observable
  name = '';

  @observable
  countings: IEntry[] = [];

  componentDidMount(): void {
    this.fetchCountings();
  }

  @action
  setName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.name = e.target.value;
  };

  @action
  increment = (): void => {
    this.counter += 1;
  };

  @action
  fetchCountings = async (): Promise<void> => {
    try {
      const data: any = await API.graphql(graphqlOperation(listCountings));
      const countings = data.data.listCountings.items;
      this.countings = countings;
    } catch (err) {
      console.error('Error when fetching all countings');
    }
  };

  @action
  addCounting = async (): Promise<void> => {
    try {
      const name = this.name || 'Someone';
      const counting: IEntry = { name, number: this.counter };
      await API.graphql(graphqlOperation(createCounting, { input: counting }));
      await this.fetchCountings();
    } catch (err) {
      console.error('Error when creating a new counting entry');
      console.log(err);
    }
    this.name = '';
    this.counter = 0;
  };

  @action
  deleteCounting = async (id?: string): Promise<void> => {
    if (!id) return;
    await API.graphql(graphqlOperation(deleteCounting, { input: { id } }));
    await this.fetchCountings();
  };

  render(): JSX.Element {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">Test Card</Typography>
          <Typography variant="body2">
            {this.name ? this.name : 'You'} clicked on button for {this.counter} times
          </Typography>
          <br />
          Name: <TextField id="outlined-basic" label="Name" variant="outlined" onChange={this.setName} />
          <br />
          <br />
          Saved countings: <br />
          <List>
            <li>
              {this.countings.map((counting: IEntry) => (
                <ul key={counting.id} style={{ marginBottom: '10px' }}>
                  <Button variant="outlined" color="secondary" onClick={() => this.deleteCounting(counting.id)}>
                    Delete
                  </Button>
                  &nbsp;&nbsp;
                  {counting.name}: <b style={{ fontSize: '1.5em' }}>{counting.number}</b>
                </ul>
              ))}
            </li>
          </List>
        </CardContent>
        <CardActions>
          <div style={{ margin: 'auto' }}>
            <Button variant="contained" color="primary" onClick={this.increment}>
              Click
            </Button>
            <Button variant="contained" color="default" onClick={this.addCounting}>
              Save
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default Counter;
