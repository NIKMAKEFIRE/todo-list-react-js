import React from 'react'
import List from '../List/index'
import Badge from '../Badge/index'
import addSvg from '../../assets/img/add.svg'

import './AddListButton.scss'

const AddButtonList = ({ colors }) => {

    const [visiblePopup, setVisiblePopup] = React.useState(true);
    const [selectedColor, setSelectedColor] = React.useState(null);

    console.log(selectedColor);

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
                <input className="list__add-input" type="text" placeholder="Название списка" />
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

export default AddButtonList