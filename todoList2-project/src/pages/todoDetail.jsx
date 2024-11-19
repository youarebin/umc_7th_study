import * as T from './todoDetail.style';
import useTodoApi from '../hooks/useCustomFetch';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function TodoDetail() {
    const [todoData, setTodoData] = useState(null);
    const { todoId } = useParams();
    console.log(todoId);

    useEffect(() => {
        const getTodoDetail = async() => {
            try {
                const response = await axios.get(`http://localhost:3000/todo/${todoId}`);
                setTodoData(response.data);
            } catch (error) {
                console.error("Error get todo:", error);
            }
        }
        getTodoDetail();
      }, [todoId]);
    
    if (!todoData) {
        return <p>로딩 중...</p>; // 데이터가 없을 때 로딩 중 표시
    }
    
    return(
        <T.DetailContainer>
            <h2>UMC ToDoList</h2>
            <div>
                <p className='id'>id: {todoData.id}</p>
                <p>title: {todoData.title}</p>
                <p>content: {todoData.content}</p>
                <p>updatedAt: {todoData.updatedAt}</p>
                {todoData.checked ? 
                <p>상태: 완료</p> 
                : <p>상태: 미완료</p>}
            </div>
        </T.DetailContainer>
    )
}

export default TodoDetail;