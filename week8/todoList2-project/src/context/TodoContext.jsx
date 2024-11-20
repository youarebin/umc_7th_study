import { createContext, useState, useContext, useEffect } from "react";
import useTodoApi from '../hooks/useCustomFetch';
import useDebounce from "../hooks/debounce";

export const TodoContext = createContext();

export function TodoContextProvider({children}) {
    const [todos, setTodos] = useState([]);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [editingId, setEditingId] = useState('');
    const [editingSearh, setEditingSearch] = useState('');
    const [editingTitle, setEditingTitle] = useState('');
    const [editingContent, setEditingContent] = useState('');

    const { fetchTodos, createTodo, updateTodo, deleteTodo, toggleCheck } = useTodoApi();
    const debounceText = useDebounce(editingSearh, 200);

     // title에 따라 Todos를 가져오는 함수
    const loadTodos = async (searchTitle = '') => {
        try {
            const data = await fetchTodos(searchTitle); // 검색어가 있으면 전달하고, 없으면 전체 조회
            if (data) {
                setTodos(data); // 데이터를 상태에 업데이트
            } else {
                console.error("Failed to fetch todos");
            }
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    // title 상태 변경 시 자동으로 호출
    useEffect(() => {
        loadTodos(debounceText); // title 값에 따라 데이터를 가져옴
    }, [debounceText]); // title이 변경될 때마다 실행

    //1) 추가
    const addTodo = async (title, content) => {
        await createTodo(title, content);
        loadTodos(); // 추가된 todo반영 데이터 불러오기
    };

    //2)삭제
    const removeTodo = async (id) => {
        await deleteTodo(id);
        loadTodos(); // 삭제된 todo 반영 데이터 불러오기
    };

    // 수정하기 시작
    const startEdit = (item) => {
        setEditingId(item.id);
        setEditTitle(item.title);
        setEditContent(item.content);
    };

    // 수정 완료
    const saveEdit = async () => {
        await updateTodo(editingId, editTitle, editContent);
        loadTodos(); // 수정 반영 데이터 불러오기
        setEditingId(null); 
    };

    const checkEdit = async (id, checked) => {
        await toggleCheck(id, checked);
        loadTodos(); // 체크 상태 반영 데이터 불러오기
    };
    
    return (
        <TodoContext.Provider value={{    
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
            checkEdit,
        }}>
        {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext);
