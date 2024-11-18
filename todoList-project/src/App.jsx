import TodoList from "./components/todolist";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <>
      <TodoContextProvider>
        <div className="App">
          <TodoList />
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App
