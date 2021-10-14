import { useState, useEffect } from "react";
import './bootstrap.min.css';
import LocalRow from './components/LocalRow';
import LocalBanner from "./components/LocalBanner";
import LocalCreator from "./components/LocalCreator";
import LocalVisibilityC from "./components/LocalVisibilityC";

function App() {


  const createNewLocal = localName => {
    if(!localItems.find(t => t.name === localName)){
      setLocalItems([...localItems, {name: localName, done: false}]);
    }
  }
  const [userName] = useState('');
  const [localItems, setLocalItems] = useState([
    {}
  ]);

  const [completed, setCompleted] = useState(true);


  useEffect(() =>{
    let data = localStorage.getItem('Tasks');
    if(data != null){
      setLocalItems(JSON.parse(data));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(localItems));
  },[localItems]);

/* 
const deleteLocal = (localname) => {
  let data = JSON.parse(localStorage.getItem('Tasks'));
      data.forEach((local, index) => {
        if(local.name === localname)
        {   console.log(localname);
            data.splice(index, 1);
        }
        else{
          console.log(localname);
        }
    });
    localStorage.setItem('Tasks', JSON.stringify(data));
} */


  /* useEffect(() => {
    let data;
    if(localStorage.getItem('Tasks') === null){
      data = [];
    }
    else{
      data = JSON.parse(localStorage.getItem('Tasks'));
    }
    return data;
  });


  useEffect(() =>{
    localStorage.setItem('Tasks', JSON.stringify(localItems));
  },[localItems]);
 */
  const toggle = local => 
    setLocalItems(localItems.map(t => (t.name === local.name ? {...t, done: !t.done} : t)));

  const tableRows = (done) => 
    localItems
    .filter(t => t.done === done)
    .map(local => (
      <LocalRow local={local} 
      key={local.name} 
      toggleLocal={toggle} 

      />

    ))

  return (
    <div className="App">
    <LocalCreator createNewLocal = {createNewLocal}/>
    <LocalBanner userName={userName} localItems={localItems}/>
    <table className="table table-striped table-bordered">
    <thead>
    <tr>
        <th>Descripcion</th>
        <th>Realizadas</th>
      </tr>
    </thead>
    <tbody>
      {tableRows(false)}
    </tbody>
    </table>
    <div className="bg-secundary-text-white text-center p-2">
      <LocalVisibilityC
        description = "Tareas Completadas"
        isChecked={completed}
        callback={checked => setCompleted(checked)}
      />
    </div>
    {completed &&
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Realizadas</th>
          </tr>
        </thead>
        <tbody>
          {tableRows(true)}
        </tbody>
      </table>
    }


    </div>
  );
}

export default App;
