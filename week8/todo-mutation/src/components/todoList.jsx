import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useQuery, useMutation} from '@tanstack/react-query';
import styled from "styled-components";
import { deleteTodo, getTodoList, patchTodo, postTodo } from '../apis/todo';
import { queryClient } from '../main';
import useDebounce from '../hooks/debounce';

function TodoList() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const navigate = useNavigate();
  const debounceText = useDebounce(search, 200);

  const {data: todos, isPending} = useQuery({
    queryFn: () => getTodoList({title: search}),
    queryKey: ["todos", debounceText],
  })

  const {mutate: postTodoMutation} = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {console.log(error)},
    onSettled: () => {}
  })

  const {mutate: deleteTodoMutation} = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {console.log(error)},
    onSettled: () => {}
  })

  const {mutate: patchTodoMutation} = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {console.log(error)},
    onSettled: () => {}
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    postTodoMutation({title: title, content: content});
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    patchTodoMutation({ id: editId, title: editTitle, content: editContent });
    setEditId(null);
    setEditTitle("");
    setEditContent("");
  };

  return (
    <Container>
      <h1>Todo 검색</h1>
      <Input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        style={{ margin: '20px 0' }} 
        />
      <Form onSubmit={handleSubmit}>
        <Input 
          name='title'
          placeholder='제목을 입력해주세요'
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <Input 
          name='content'
          placeholder='내용을 입력해주세요'
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <Button type='submit'>생성</Button>
      </Form>
      {isPending? (
        <div>로딩중입니다</div>
      ) : (
        <TodoListContainer>
          {todos[0]?.map((todo) => {
            const isEditing = editId === todo.id;
            return (
                <TodoContainer key={todo.id}>
                    <input
                      type="checkbox"
                      defaultChecked={todo.checked}
                      onChange={() =>
                        patchTodoMutation({
                          id: todo.id,
                          checked: !todo.checked,
                        })
                      }
                    />
                {isEditing ? (
                  <form onSubmit={handleEditSubmit}>
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <Input
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    />
                    <Button type="submit">수정 완료</Button>
                  </form>
                ) : (
                  <>
                    <div onClick={() => navigate(`/todo-detail/${todo.id}`)}>
                      <p>{todo.title}</p>
                      <p>{todo.content}</p>
                    </div>
                        <Button onClick={() => deleteTodoMutation({ id: todo.id })}>
                        삭제하기
                        </Button>
                        <Button
                        onClick={() => {
                            setEditId(todo.id);
                            setEditTitle(todo.title);
                            setEditContent(todo.content);
                        }}
                        >
                        수정하기
                        </Button>
                  </>
                )}
                </TodoContainer>
              );
          })}
        </TodoListContainer>
      )}
    </Container>

  )
}

export default TodoList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
    width: 500px;
    height: 50px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    padding: 20px;
    height: 50px;
    font-size: 15px;
    cursor: pointer;
`;

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
    width: 500px;
`;

const TodoContainer = styled.div`
    display: flex;
    gap: 5px;
`;
