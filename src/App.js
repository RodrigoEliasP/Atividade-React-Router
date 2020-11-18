import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Pesquisar from './Pages/Pesquisar';
import Habilidades from './Pages/Habilidades';
import Detalhes from './Pages/Detalhes';
/*

DESCULPE PELA AUSÊNCIA DE CSS

*/
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Pesquisar} />
        <Route path="/habilidades" exact component={Habilidades} />
        <Route path="/detalhes" exact component={Detalhes} />
        <Route path="*">
          <h2>Essa página não existe :'(</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
