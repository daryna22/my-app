import React from 'react';

export function Time() {
    const clock = new Date().toLocaleTimeString();
    const formatName = (user) => `${user.first} ${user.last}`;
    const data = {
        first: 'Daryna',
        last: 'Maksymenko'
    };
    const element = formatName(data);
    return (
        <header>
        <h1> { element }</h1>
        <span> { clock } </span>
        </header> )
}