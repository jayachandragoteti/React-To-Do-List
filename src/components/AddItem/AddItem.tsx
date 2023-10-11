import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, addItemSubmitHandler }) => {
    const inputRef = useRef();
    return (
        <form className='addForm' onSubmit={(e) => addItemSubmitHandler(e)}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                ref={inputRef}
                placeholder='Add Item'
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                required
            >
            </input>
            <button
                type="submit"
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem