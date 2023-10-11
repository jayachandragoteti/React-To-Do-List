import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Item = ({ item, selectItemHandler, deleteItemHandler }) => {
    return (
        <li className='item'>
            <input
                type="checkbox"
                onChange={() => selectItemHandler(item.id)}
                checked={item.checked}
            />
            <label
                style={{ textDecoration: (item.checked) ? 'line-through' : 'none' }}
                onDoubleClick={() => selectItemHandler(item.id)}>
                {item.item}
            </label>
            <FaTrashAlt
                onClick={() => deleteItemHandler(item.id)}
                role="button"
                tabIndex={0}
            />
        </li>
    )
}

export default Item