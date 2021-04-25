import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App"
import ErrorBoundery from './components/error-boundery';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundery>
            <App />
        </ErrorBoundery>
    </React.StrictMode>,
    document.getElementById('root')
);
