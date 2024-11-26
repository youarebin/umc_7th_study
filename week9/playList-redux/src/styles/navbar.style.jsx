import styled from 'styled-components';

export const Container = styled.nav`
    background-color: #5852fe;
    color: white;
    height: 80px;
    display: flex;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 800px;
    margin: 0 auto;
    padding: 0 10px;

    svg{
        width: 40px;
        z-index: 1;
    }
`;

export const CartWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CartAmount = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    background-color: #8d89e5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;    
    z-index: 2;
`;