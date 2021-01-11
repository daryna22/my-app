import React from 'react';
import ReactDOM from 'react-dom';
// parts
import { Time } from '../src/components/Time';

setInterval(
    () => {
        ReactDOM.render(
            <Time />,
            document.getElementById('test')
        );
    }, 1000)



