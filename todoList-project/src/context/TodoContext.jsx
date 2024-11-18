import { createContext, useState } from "react"

export const TodoContext = createContext();

export function TodoContextProvider({children}) {
    const [todos, setTodos] = useState([
        {id: 1, task: '투두 만들어보기'},
        {id: 2, task: '가나다라'},
    ]);

    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState('');
    const [editText, setEditText] = useState('');

    const addTodo = () => {
        if (text.trim().length === 0) {
            alert('입력하라1');
        }
        setTodos((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100) * 2, task: text },
        ]);
        setText('');
    };

    // 2 삭제
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    //3 수정하기
    const updateTodo = (id, text) => {
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: text } : item))
        );
        setEditingId('');
    };
    
    return (
        <TodoContext.Provider value={{
            todos, 
            setTodos, 
            text, 
            setText, 
            editingId, 
            setEditingId, 
            editText, 
            setEditText,
            addTodo, 
            deleteTodo, 
            updateTodo
        }}>
        {children}
        </TodoContext.Provider>
    )
}
