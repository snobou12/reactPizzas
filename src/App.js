import React from 'react';
import { Home, Cart } from './Pages';
import { Route } from 'react-router-dom';

import { Header } from './components';

// с помощью хуков(потому что компоненты у нас функциональные(Классовые слишком много логики+connect убрать))
// this нет - контекста нет

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
