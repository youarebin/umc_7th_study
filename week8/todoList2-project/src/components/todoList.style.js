import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #c7b199;
    border-radius: 10px;
`;

export const TodoListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; /* 내부 요소 간격 */
    padding: 20px;
    width: 600px;
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 500px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 10px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    padding: 0;
    border: none;
    background-color: #dfd3c3;
`;

export const TodosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
`;

export const TodoItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;

export const Todo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

export const Btn = styled.button`
    width: 80px;
    background-color: #dfd3c3;
    border: none;
    border-radius: 10px;
`;