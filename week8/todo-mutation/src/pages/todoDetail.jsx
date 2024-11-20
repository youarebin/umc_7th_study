import * as T from './todoDetail.style';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodo, patchTodo } from '../apis/todo';
import { queryClient } from '../main';

function TodoDetail() {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");
    const [editChecked, setEditChecked] = useState("");
    const { todoId } = useParams();

    const {data: todo, isPending} = useQuery({
        queryKey: ["todo", todoId],
        queryFn: () => getTodo({id: todoId}),
    })

    const {mutate: patchTodoMutation} = useMutation({
        mutationFn: patchTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todo"],
              });
            setIsEditing(false);
        },
        onError: (error) => {console.log(error)},
        onSettled: () => {}
      })

    const handleSave = (e) => {
        e.preventDefault();
        patchTodoMutation({
            id: todoId,
            title: editTitle,
            content: editContent,
            checked: editChecked,
        });
        setIsEditing(false);
        setEditTitle("");
        setEditContent("");
        setEditChecked(null);
    };

    if(isPending) {
        return (
            <div>로딩중..</div>
        );
    }
    
    return(
        <T.DetailContainer>
            <h2>UMC ToDoList</h2>
            {isEditing ? (
            <>
            <p className="id">id: {todo.id}</p>
            <div>
                <label>
                title:
                <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                </label>
            </div>
            <div>
                <label>
                content:
                <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                />
                </label>
            </div>
            <p>updatedAt: {todo.updatedAt}</p>
            <div>
                <label>
                상태:
                <input
                    type="text"
                    value={editChecked}
                    onChange={(e) => setEditChecked(e.target.value)}
                />
                </label>
            </div>
            <T.Button onClick={handleSave}>수정 완료</T.Button>
            </>
            ) : (
            <>
            <div>
                <p className="id">id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <p>content: {todo.content}</p>
                <p>updatedAt: {todo.updatedAt}</p>
                {todo.checked ? (
                    <p>상태: 완료</p>
                ) : (
                    <p>상태: 미완료</p>
                )}
            </div>
            <T.Button 
                onClick={() => {
                    setIsEditing(true);
                    setEditTitle(todo.title);
                    setEditContent(todo.content);
                    setEditChecked(todo.checked);
                }}>
                수정
            </T.Button>
            </>
            )}
        </T.DetailContainer>

    )
}

export default TodoDetail;