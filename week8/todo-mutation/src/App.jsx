import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from './components/todoList';
import TodoDetail from './pages/todoDetail';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <TodoList />,
    },
    {
      path: "/todo-detail/:todoId",
      element: <TodoDetail />,
    },
  ]);

function App() {
  return (
    <>
        <div className="App">
          <RouterProvider router={router} />
        </div>
    </>
  );
}

export default App
