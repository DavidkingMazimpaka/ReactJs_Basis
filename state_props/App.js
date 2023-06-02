import React, { useState } from 'react';

function App() {
    const [name, setName] = useState("")
    return (

        <
        div >
        <
        button type = ""
        onClick = {
            () => setName('Wassup') } > Click Me Here < /button> <
        h1 > { name } < /h1> <
        /div>
    );
}

function MyComponet(props) {
    return <h1 > { props.name } < /h1>
}
export default App;