import React from 'react'

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    items = [];

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item, key) => (
                    <li className="list-group-item" key={item}>{item}</li>
                ))}

            </ul>
        </>
    );
}

export default ListGroup