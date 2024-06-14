import React from 'react'

function Message() {
    const name = 'Gerardo';

    if (name)
        return <h1>Hello {name}</h1>
    return (
        <div>Message</div>
    )
}

export default Message;