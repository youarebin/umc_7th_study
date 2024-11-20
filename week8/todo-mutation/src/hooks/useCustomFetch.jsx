import { useState, useEffect } from 'react';
import axios from 'axios';

const useTodoApi = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    // Fetch todos
    const fetchTodos = async (searchTitle = null) => {
        try {
            const response = await axios.get("http://localhost:3000/todo", {
                params: {
                    title: searchTitle,
                }
            });
            setTodos(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching todos:", error);
            setError(error);
        }
    };

    // Create a new todo
    const createTodo = async (title, content) => {
        try {
            await axios.post("http://localhost:3000/todo", { title, content });
            await fetchTodos(); // Re-fetch todos after creating
        } catch (error) {
            console.error("Error creating todo:", error);
            setError(error);
        }
    };

    // Update a todo
    const updateTodo = async (id, title, content) => {
        try {
            await axios.patch(`http://localhost:3000/todo/${id}`, { title, content });
            await fetchTodos(); // Re-fetch todos after updating
        } catch (error) {
            console.error("Error updating todo:", error);
            setError(error);
        }
    };

    // Toggle todo checked state
    const toggleCheck = async (id, currentChecked) => {
        try {
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === id ? { ...todo, checked: !currentChecked } : todo
                )
            );

            await axios.patch(`http://localhost:3000/todo/${id}`, { checked: !currentChecked });
            await fetchTodos(); 
        } catch (error) {
            console.error("Error toggling check:", error);
            setError(error);
        }
    };

    // Delete a todo
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todo/${id}`);
            await fetchTodos(); // Re-fetch todos after deleting
        } catch (error) {
            console.error("Error deleting todo:", error);
            setError(error);
        }
    };

    const getTodoDetail = async(id) => {
        try {
            const response = await axios.get(`http://localhost:3000/todo/${id}`);
            return response;
        } catch (error) {
            console.error("Error get todo:", error);
            setError(error);
        }
    }

    // Initial fetch
    useEffect(() => {
        fetchTodos();
    }, []);

    return {
        todos,
        fetchTodos,
        createTodo,
        updateTodo,
        toggleCheck,
        deleteTodo,
        getTodoDetail,
        error,
    };
};

export default useTodoApi;
