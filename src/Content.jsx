import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";


const Content=()=>{
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

    useEffect(() => {
      localStorage.setItem('shoppingList', JSON.stringify(items))
    }, [items]);

    const [newItem, setNewItem] = useState('');

    const addItem =(item)=>{
      const id = items.length ? items[items.length - 1 ].id + 1 : 1;
      const myNewItem = {id, checked:false, title: item };
      const listItems = [...items, myNewItem];
      setItems(listItems); 
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      setNewItem(''); 
    }



    const checkItem =(id)=>{
        const listItems = items.map(item=> item.id === id ? {...item, checked:!item.checked}: item);
        setItems(listItems)

    }

    const deleteItem =(id)=>{
        const listItems = items.filter(item=> item.id !== id);
        setItems(listItems)

    }

    const[search, setSearch] = useState('');

    return(
       <>
        <Header/>
        <Main
            search={search}
            setSearch={setSearch}
            newItem={newItem}
            setNewItem={setNewItem}
            items={items}
            checkItem={checkItem}
            deleteItem={deleteItem}
            handleSubmit={handleSubmit}
        />
        <Footer

            items={items}
        />
       </>
    )
}

export default Content;