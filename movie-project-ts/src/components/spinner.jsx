import styled from 'styled-components';
import {FadeLoader} from 'react-spinners';

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <FadeLoader 
                color='#e83261'
                size = {100}
            />
        </SpinnerWrapper>
    );
};

export default Spinner;

const SpinnerWrapper = styled.div`
    width: 100vw;
`;