import React from 'react'
import Item from '../Item/Item.tsx'

const ItemList = ({ items, selectItemHandler, deleteItemHandler }) => {
    return (
        <ul>
            {items.map((item) => (
                <Item key={item.id}
                    item={item}
                    selectItemHandler={selectItemHandler}
                    deleteItemHandler={deleteItemHandler}
                ></Item>
            ))}
        </ul>
    )
}

export default ItemList