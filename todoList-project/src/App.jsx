import { useContext, useState } from 'react';
import './App.css'
import Input from './components/Input';
import Button from './components/Button';
import { TodoContext } from './context/TodoContext';

function App() {
  const {
    todos, 
    text, 
    setText, 
    editingId, 
    setEditingId, 
    editText, 
    setEditText,
    handleSubmit, 
    addTodo, 
    deleteTodo, 
    updateTodo
  } = useContext(TodoContext);

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        {/* <input 
          type='text' 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTodo()}>할 일 등록</button> */}
        <Input value={text} onChange={setText} />
        <Button onClick={addTodo} label="할 일 등록" />
      </form>    
      <div>
        {todos.map((todo, _) => (
          <div key={todo.id} className='todoItem'>
            {editingId !== todo.id && (
              <div key={todo.id} className='content'>
                <p>{todo.id}. </p>
                <p>{todo.task}</p> 
              </div>
            )}
            {editingId === todo.id && (
              <div key={todo.id} className='content'>
                <p>{todo.id}. </p>
                {/* <input 
                  defaultValue={todo.task} 
                  onChange={(e) => setEditText(e.target.value)} 
                /> */}
                <Input value={todo.task} onChange={setEditText} />
              </div>
            )}
            {/* <button onClick={() => deleteTodo(todo.id)}>삭제하기</button> */}
            <Button onClick={() => deleteTodo(todo.id)} label="삭제하기" />
            {editingId === todo.id ? (
              // <button onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
              <Button onClick={() => updateTodo(editingId, editText)} label="수정 완료"/>
            ) : (
              // <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
              <Button onClick={() => setEditingId(todo.id)} label="수정 진행"/>
            )}         
          </div>
        ))}
      </div>
    </>
  );
}

export default App
