import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";
import * as N from '../styles/navbar.style';

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);
    
    return (
        <N.Container>
            <N.ContentWrapper>
                <h1>UMC PlayList</h1>
                <N.CartWrapper>
                    <CartIcon/>
                    <N.CartAmount>
                        <p>{ amount }</p>
                    </N.CartAmount>
                </N.CartWrapper>
            </N.ContentWrapper>
        </N.Container>
    );
};

export default Navbar;
