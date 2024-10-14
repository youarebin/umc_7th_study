import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="title">카테고리</div>
            <CategoryWrapper>
                <div className="red category" onClick={() => navigate('/movies/now-playing')}>현재 상영중인</div>
                <div className="orange category" onClick={() => navigate('/movies/popular')}> 인기있는</div>
                <div className="yellow category" onClick={() => navigate('/movies/top-rated')}>높은 평가를 받은</div>
                <div className="green category" onClick={() => navigate('/movies/up-coming')}>개봉 예정중인</div>                
            </CategoryWrapper>
        </Container>
    );
};

export default Movies;

const Container = styled.div`
    .title {
        color: white;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`

const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;

    .red { background-color: red; }
    .orange { background-color: orange; }
    .yellow { background-color: yellow; }
    .green { background-color: green; }

    .category {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        width: 250px;
        height: 100px;
        border-radius: 20px;
        color: black;
        cursor: pointer;
    }
`;