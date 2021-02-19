import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import Header from './components/Header'
import { Button, Icon } from 'react-materialize';

const App = () => {

    const [text, setText] = useState('');

    const handleCLick = (event) => {
        event.preventDefault();
        setText('Clicked!')
    }

    return (
        <div>
            {/*<Header />*/}
            <h2>React Home</h2>
            <div>{text}</div>
            <div>
                <Button
                    onClick={handleCLick}
                    node="button"
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                >
                    button
                    <Icon left>
                        cloud
                    </Icon>
                </Button>
            </div>
        </div>
    )
}

export default App

ReactDOM.render(<App/>, document.querySelector('#react-root'))