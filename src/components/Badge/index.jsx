import React from 'react'

import './Badge.scss'
 
const Badge = ({color, onClick, className}) => 
<i 
// style={{background: '#42B883'}}
 onClick={onClick} 
className={`badge badge--${color} 
${className}`}></i>

export default Badge