import React from 'react'
import penSvg from '../../assets/img/edit.svg'

import './Tasks.scss'

function Tasks() {
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                Фронтенд
                <img src={penSvg} alt="Edit icon"/>
            </h2>

            <div className="tasks__items">
                <div className="checkbox">
                    <input type="checkbox" />
                    <label htmlFor=""></label>
                </div>
            </div>
        </div>
    )
}

export default Tasks