import {Routes ,Route } from 'react-router-dom';

import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.compotent.jsx';


const App = () => {

    return (
      <Routes>
         <Route  path ='/' element={<Navigation/>}>
              <Route index element={< Home />}/>
          </Route>
      </Routes>
    );
}

export default App;
