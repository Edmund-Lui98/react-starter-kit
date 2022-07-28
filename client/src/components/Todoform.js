import React, {useState, useEffect, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';


function Todoform(props) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: uuidv4(),
            text: input
        });

        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a todo" value={input} onChange={handleChange} ref={inputRef}/>
            <button>Add todos</button>
        </form>
    )
}

export default Todoform