import { useState } from "react";
// Want Props to come in as { items: [], heading: string }
interface ListGroupsProps {
    items: string[];
    heading: string;
    //(item: sring) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupsProps) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0]; // variable (selectedIndex)
    // arr[1]; // updater function

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}

            </ul >
        </>
    );
}

export default ListGroup