import CartItem from "./cartItem";
import { useSelector, useDispatch } from "react-redux";
import * as P from '../styles/playlist.style';
import { openModal } from "../features/modal/modalSlice";

function PlayList () {
    const { cartItems, total, amount} = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    return (
        <P.Container>
            <P.Header>
                <h2>당신이 선택한 음반</h2>
            </P.Header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <P.Footer>
                <hr />
                <P.PriceWrapper>
                    <h4>총 가격</h4>
                    <h4>₩ {total}원</h4>
                </P.PriceWrapper>
                <P.Button onClick={() => {dispatch(openModal())}}>
                    장바구니 초기화
                </P.Button>
            </P.Footer>
        </P.Container>
    );
}

export default PlayList