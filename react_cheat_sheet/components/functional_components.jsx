function Karibu (props) {
    
        return <h1>Habari ya siku yako?{props.name}</h1>;
    }


// Creating functional components with State

import React, {useState} from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount (count + 1)}>Click Me </button>
        </div>
    );
}