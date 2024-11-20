import axiosInstance from "./axiosInstance";

//TODO: TODO 생성
const postTodo = async({title, content, checked = false}) =>{
    const {data} = await axiosInstance.post("/todo",{
        title,
        content,
        checked,
    });

    return data;
}

//TODO: TODO List 가져오기( title)
const getTodoList = async({title}) => {
    let url = "/todo";

    if(title) {
        url += `?title=${title}`;
    }
    const {data} = await axiosInstance.get(url);

    return data;
}

//TODO: TODO 단건 가져오기
const getTodo = async({id}) => {
    const {data} = await axiosInstance.get(`/todo/${id}`);

    return data;
}

//TODO: TODO 수정
const patchTodo = async({id, title, content, checked}) => {
    const {data} = await axiosInstance.patch(`/todo/${id}`, {
        title,
        content,
        checked,
    });

    return data;
}

//TODO: TODO 삭제
const deleteTodo = async({id}) => {
    const {data} = await axiosInstance.delete(`/todo/${id}`);

    return data;
}

export {postTodo, getTodoList, getTodo, patchTodo, deleteTodo};