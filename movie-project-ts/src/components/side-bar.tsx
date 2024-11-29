import {Link} from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";

const Bar = styled.div`
    background-color: #131517;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: 70px;
    width: 200px;
    display: flex;
    flex-direction: column;

    a {
        color: white;
        text-decoration: none;
        margin-left: 10px;
    }
`;

const LinkWrapper = styled.div`
    cursor: pointer;
    justify-content: space-between;
    color: white;
    margin: 20px 0 20px 10px;
`;

const SideBar = () => {
    return (
        <Bar>
            <LinkWrapper>
                <FaSearch/>
                <Link to={'/search'}>찾기</Link>                
            </LinkWrapper>
            <LinkWrapper>
                <BiMoviePlay/>
                <Link to={'/movies'}>영화</Link>
            </LinkWrapper>
        </Bar>
    );
};

export default SideBar;