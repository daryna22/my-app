import React from 'react';

const formatName = (user) => `${user.first} ${user.last}`;
const data = {
    first: 'Daryna',
    last: 'Maksymenko'
};

export const element = <h1>{formatName(data)}</h1>;