import React from 'react'
import List from './components/List';
import listSvg from './assets/img/list.svg'
import AddList from './components/AddList'

import DB from './assets/db.json'

function App() {

  const [lists, setLists] = React.useState([
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name
      return item
    })
  ]);
 
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: <img src={listSvg} alt="List icon" />,
            name: 'Все задачи',
            active: true
          },
        ]} />
        <List
          items={lists} isRemovable />
        <AddList colors={DB.colors} />
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  );
}

export default App;
