/* eslint-disable max-classes-per-file */
import { Container } from '@material-ui/core';
import React from 'react';

import Counter from './views/Counter/Counter';
import TopNav from './views/TopNav/TopNav';

const App: React.FC = () => {
  return (
    <div>
      <TopNav />
      <Container maxWidth="md">
        <Counter />
      </Container>
    </div>
  );
};

export default App;
