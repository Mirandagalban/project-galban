import React from "react";

const ItemListContainer = ({greeting, title}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <h3>{title}</h3>
        </div>
    )
};

export default ItemListContainer