import React, { useState } from 'react';

export function Write(props) {
    const [inputs, setInputs] = useState({
        name: '',
        text: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });

    };

    const onPost = () => {
        props.writeFunc(inputs.name, inputs.text);
        setInputs({
            name: '',
            text: ''
        })
    };



    return <>
        <div>
            <input name="name" type="text" value={inputs.name} onChange={onChange}/>
            <textarea name="text" id="" cols="30" rows="10" value={inputs.text} onChange={onChange} />
            <button onClick={onPost}>전송</button>
        </div>
    </>
}
