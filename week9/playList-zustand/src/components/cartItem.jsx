import { ChevronDown, ChevronUp } from "../constants/icons";
import * as C from '../styles/cartItem.style';
import useCartStore from "../store/cartStore";

const CartItem = ({id, title, singer, price, img, amount}) => {
    const { increase, removeItem, decrease } = useCartStore();

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
                <C.Button onClick={() => {increase(id)}}>
                    <ChevronUp />
                </C.Button>
                <p>{amount}</p>

                <C.Button onClick={() => {
                    if(amount === 1) {
                        removeItem(id);
                        return;
                    }
                    decrease(id);
                }}>
                    <ChevronDown />
                </C.Button>
            </C.BtnWrapper>
        </C.Container>
    );
};

export default CartItem