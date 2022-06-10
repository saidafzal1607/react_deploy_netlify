import React from 'react';
import AddItem from './AddItem';
import ListItems from './ListItems';
import Search from './Search';

const Main = ({items, checkItem, deleteItem, newItem, setNewItem, handleSubmit, search, setSearch}) => {
    return (
        <main>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            /> 
            <Search
                search={search}
                setSearch={setSearch}
            />
            <ListItems
                items={items.filter(item=> ((item.title).toLowerCase()).includes(search.toLowerCase()))}
                checkItem={checkItem}
                deleteItem={deleteItem}
            />
        </main>
    );
};

export default Main;