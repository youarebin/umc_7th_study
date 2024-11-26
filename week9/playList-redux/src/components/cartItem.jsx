import { ChevronDown, ChevronUp } from "../constants/icons";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";
import * as C from '../styles/cartItem.style';

const CartItem = ({id, title, singer, price, img, amount}) => {
    const dispatch = useDispatch();

    return(
        <C.Container>
            <C.Img src={img} alt={`${title} 이미지`}/>
            <div>
                <C.H4>
                    {title} | {singer}
                </C.H4>
                <h4>₩ {price}</h4>
            </div>
            <C.BtnWrapper>
                <C.Button onClick={() => {dispatch(increase(id))}}>
                    <ChevronUp />
                </C.Button>
                <p>{amount}</p>

                <C.Button onClick={() => {
                    if(amount === 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease(id));
                }}>
                    <ChevronDown />
                </C.Button>
            </C.BtnWrapper>
        </C.Container>
    );
};

export default CartItem