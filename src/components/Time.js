import React from 'react';

export function Time() {
    const clock = new Date().toLocaleTimeString();

    return <header>
        <h1>Hello World!</h1>
        <span> { clock } </span>
    </header>

}