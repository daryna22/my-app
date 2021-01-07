import React from 'react';
import ReactDOM from 'react-dom';
// parts
import { element as Hello } from './components/Hello';
import { element as Text } from './components/Text';

ReactDOM.render(
    <div>
        { Text }
        { Hello}
    </div>,
  document.getElementById('test')
);


