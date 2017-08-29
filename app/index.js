import React from 'react';
import ReactDOM from 'react-dom';
import { SlideIn } from 'react-slidein';
import App from './App.jsx';
import './index.less';

ReactDOM.render(
    <App name="Ues" />,
    document.getElementById('app')
);

let open = false;
document.getElementById('slideinBtn').addEventListener('click', () => {
    open = !open;
    console.log(open);
    ReactDOM.render(
        <SlideIn className={'my-dropdown-slidein'}>
            {open ? getCHildrenElement() : null}
        </SlideIn>,
        document.getElementById('slidein')
    );

});

function getCHildrenElement() {
    return (
        <div style={{ background: 'red' }}>
            <h2> Otro componente </h2>
            <p> 'Webhooks can be used for binding events when something is happening within the project.' </p>
        </div>
    );
}
