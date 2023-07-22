import React from "react";

const ItemListContainer = ({greeting, title}) => {
    return (
        <div className="welcome">
            <h1 className="welcome-title">{greeting}</h1>
            <p className="welcome-txt"> {title}</p>
        </div>
    )
};

export default ItemListContainer