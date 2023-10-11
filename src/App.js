import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.tsx';
import AddItem from './components/AddItem/AddItem.tsx';
import SearchItem from './components/SearchItem/SearchItem.tsx';
import Content from './components/Content/Content.tsx';
import Footer from './components/Footer/Footer.tsx';
import apiRequest from './components/API/apiRequest.js';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearchItem] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // localStorage.setItem('toDoList', JSON.stringify(items));
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not received expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      header: {
        'Content-TYpe': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };
  const addItemSubmitHandler = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  const selectItemHandler = async (itemId) => {
    const listItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItems);
    const myItem = listItems.filter((item) => item.id === itemId);
    const updateOption = {
      method: 'PATCH',
      header: {
        'Content-TYpe': 'application/json',
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const newUel = `${API_URL}/${itemId}`
    const result = await apiRequest(API_URL, updateOption);
    if (result) setFetchError(result);
  };

  const deleteItemHandler = (itemId) => {
    const listItems = items.filter((item) => item.id !== itemId);
    setItems(listItems);
  };
  return (
    <div className='App'>
      <Header title='Todo List' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        addItemSubmitHandler={addItemSubmitHandler}
      />
      <SearchItem search={search} setSearchItem={setSearchItem} />
      <main>
        {isLoading && <p> Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
            selectItemHandler={selectItemHandler}
            deleteItemHandler={deleteItemHandler}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
