import React from 'react'
import List from './components/List';
import listSvg from './assets/img/list.svg'
import AddButtonList from './components/AddButton'

import DB from './assets/db.json'

function App() {

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
        <List items={[
          {
            color: 'green',
            name: 'Покупки'
          },
          {
            color: 'blue',
            name: 'Фронтенд',
            active: true
          },
          {
            color: 'pink',
            name: 'Фильмы и сериалы'
          },
        ]}
          isRemovable
        />
        <AddButtonList colors={DB.colors}/>
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  );
}

export default App;
