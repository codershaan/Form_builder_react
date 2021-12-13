import './App.css';

import {

  Route,
  Link,
  Routes,
  useLocation
} from "react-router-dom";
import { FormList } from './components/formList';
import { CreateForm } from './components/createForm';
import { useState, useEffect } from 'react';




function App() {


  const [showList, setShowList] = useState(false);
  // let location = useLocation();
  let location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/formList':
        return setShowList(true);
      default:
        return setShowList(false);
    }
  }, [location])



  // dispatch(actions.adduserAction(user))






  return (


    <div>
      <div>
        {
          !showList && <div  ><Link to="/formList" >Created Form List</Link></div>
        }
      </div>
      <Routes>
        <Route path="/" showList={showList} element={<CreateForm />}>
        </Route>
        <Route path="/formList" showList={showList} element={<FormList />}>
        </Route>
      </Routes>
    </div>


  );
}

export default App;
