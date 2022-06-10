import React from 'react';
import Item from './Item';


const ListItems = ({items, checkItem, deleteItem}) => {
    return (
        <ul>
        {items.map(item=>(
            <Item
                key={item.id}
                item={item}
                checkItem={checkItem}
                deleteItem={deleteItem}
            />

        ))}
    </ul>
    );
};

export default ListItems;