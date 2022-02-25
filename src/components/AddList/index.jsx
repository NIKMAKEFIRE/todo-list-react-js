import React from 'react'
import List from '../List/index'
import Badge from '../Badge/index'
import addSvg from '../../assets/img/add.svg'
import closeSvg from '../../assets/img/close.svg'

import './AddListButton.scss'

const AddList = ({ colors }) => {

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [selectedColor, setSelectedColor] = React.useState(colors[0].id);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <>
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className: 'list__add-button',
                        icon: <img src={addSvg} alt="add icon" />,
                        name: 'Добавить список'
                    },
                ]}
            />
            {visiblePopup && (<div className="list__add-popup">
                <img
                onClick={() => setVisiblePopup(false)}
                src={closeSvg} 
                alt="Close button" 
                className="list__popup-close-btn" />

                <input 
                value={inputValue} 
                onChange={e => console.log(e)}
                className="list__add-input" 
                type="text" 
                placeholder="Название списка" />

                <div className="list__popup-colors">
                    {
                        colors.map(color => (
                            <Badge onClick={() => setSelectedColor(color.id)}
                                key={color.id}
                                color={color.name}
                                className={selectedColor === color.id && 'active'}
                            />
                        ))}
                </div>
                <button className="button">Добавить</button>
            </div>
            )}
        </>
    )
}

export default AddList