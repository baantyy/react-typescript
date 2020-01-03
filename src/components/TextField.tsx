import React, { useState, useRef } from 'react';

interface Person {
    firstName: string;
}

interface Props {
    text: string;
    bool: boolean;
    num?: number;
    fn: (name: string) => string;
    obj: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<TextNode>({ text: '1' });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    
    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}

export default TextField;