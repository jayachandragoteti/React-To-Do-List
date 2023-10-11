import React, { Fragment } from 'react';
import ItemList from '../ItemList/ItemList.tsx';


const Content = ({ items, selectItemHandler, deleteItemHandler }) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    selectItemHandler={selectItemHandler}
                    deleteItemHandler={deleteItemHandler}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>
                    Your list is empty.
                </p>
            )}
        </>
    )
}

export default Content