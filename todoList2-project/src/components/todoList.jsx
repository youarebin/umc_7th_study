import * as T from './todoList.style';
import { useNavigate } from "react-router-dom";
import { useTodoContext } from '../context/TodoContext';

function TodoList() {
    const {
        todos,
        editTitle,
        setEditTitle,
        editContent,
        setEditContent,
        editingSearh,
        setEditingSearch,
        editingId,
        editingTitle,
        editingContent,
        setEditingTitle,
        setEditingContent,
        addTodo,
        removeTodo,
        startEdit,
        saveEdit,
        checkEdit
    } = useTodoContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(editingTitle, editingContent); // Add todo using Context
        setEditingTitle('');
        setEditingContent('');
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        if (name === "search") {
            setEditingSearch(value); // 검색어 입력
        } else if (name === "title") {
            setEditingTitle(value); // 제목 입력
        } else if (name === "content") {
            setEditingContent(value); // 내용 입력
        } else if (name === "editTitle") {
            setEditTitle(value);
        } else if (name === "editContent") {
            setEditContent(value);
        }
    };

    return (
        <T.Background>
        <T.TodoListContainer>
            <h2>UMC ToDoList</h2>
            <T.FormWrapper onSubmit={handleSubmit}>
                <T.Input
                    type="text"
                    name="search"
                    placeholder="검색할 제목을 입력해주세요"
                    value={editingSearh}
                    onChange={handleEditChange}/>
                <T.Input
                    type="text"
                    name="title"
                    placeholder="제목을 입력해주세요"
                    value={editingTitle}
                    onChange={handleEditChange}/>
                <T.Input
                    type="text"
                    name="content"
                    placeholder="내용을 입력해주세요"
                    value={editingContent}
                    onChange={handleEditChange}/>
                <T.Button type='submit'>ToDo생성</T.Button>
            </T.FormWrapper>
            
            {todos ? (
                    <T.TodosWrapper>
                        {todos[0]?.map((todo) => (
                            <T.TodoItem key={todo.id}>
                                <input
                                    type="checkbox"
                                    checked={todo.checked}
                                    onChange={() => checkEdit(todo.id, todo.checked)}
                                />
                                 {editingId === todo.id ? (
                                    <>
                                    <T.Todo>
                                        <input
                                            type="text"
                                            name='editTitle'
                                            value={editTitle}
                                            onChange={(e) =>
                                                handleEditChange(e)
                                            }
                                        />
                                        <input
                                            type="text"
                                            name='editContent'
                                            value={editContent}
                                            onChange={(e) =>
                                                handleEditChange(e)
                                            }
                                        />
                                    </T.Todo>
                                    <T.Btn onClick={() => saveEdit(todo.id)}>수정 완료</T.Btn>
                                    </>
                                ) : (
                                    <>
                                    <T.Todo onClick={() => navigate(`/todo-detail/${todo.id}`)}>
                                        <div>{todo.title}</div>
                                        <div>{todo.content}</div>
                                        
                                    </T.Todo>
                                    <T.ButtonWrapper>
                                        <T.Btn onClick={() => startEdit(todo)}>수정</T.Btn>
                                        <T.Btn onClick={() => removeTodo(todo.id)}>삭제</T.Btn>
                                    </T.ButtonWrapper>

                                    </>
                                )}
                               
                            </T.TodoItem>
                        ))}
                    </T.TodosWrapper>
                ) : (
                    <div>할 일이 없습니다!</div>
                )}
        </T.TodoListContainer>
        </T.Background>
    )
}

export default TodoList;