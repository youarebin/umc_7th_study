import styled from "styled-components";

export const Container = styled.aside`
    position: fixed;
    top: 40%;
    left: 50%;
    width: 400px;
    height: 120px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin: 0 auto;
    padding-top: 20px;
`

export const YesBtn = styled.button`
    border: 1px solid red;
    border-radius: 5px;
    color: red;
    background-color: white;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: #FFCCCC;
    }
`

export const NoBtn = styled.button`
    border: 1px solid blue;
    border-radius: 5px;
    color: blue;
    background-color: white;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: #EDF9FF;
    }
`