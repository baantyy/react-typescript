import React, { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.ChangeEvent<HTMLInputElement>;

interface Todos {
    text: string;
    status: boolean;
};

const Todo: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<Todos[]>([]);

    const handleChange = (e:InputElement):void => {
        setValue(e.target.value);
    };

    const handleSubmit = (e:FormElement):void => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };

    const addTodo = (text:string):void => {
        const newTodos:Todos[] = [...todos, { text, status: false }];
        setTodos(newTodos);
    };

    const completeTodo = (index:number):void => {
        const newTodos:Todos[] = [...todos];
        newTodos[index].status = !newTodos[index].status;
        setTodos(newTodos);
    };

    const removeTodo = (index:number):void => {
        // const oldTodo:Todos[] = [...todos];
        // const newTodos = oldTodo.filter((item:Todos,pos:number) => pos !== index);
        const newTodos:Todos[] = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       value={value} 
                       onChange={handleChange} 
                       required 
                    />
                <button type="submit">Add</button>
            </form>
            {todos.map((item:Todos,index:number) => (
                <div key={index} 
                     className={`todoBlock ${item.status ? 'completed' : ''}`}>
                    {item.text}
                    <button type="button"
                            onClick={():void => removeTodo(index)}
                        >
                        x
                    </button>
                    <button type="button" 
                            onClick={():void => completeTodo(index) }
                        >
                        {!item.status ? 'Complete' : 'Incomplete'}
                    </button> 
                </div>
            ))}
        </div>
    );
};

export default Todo;