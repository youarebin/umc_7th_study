import CartItem from "./cartItem";
import { useSelector } from "react-redux";
import * as P from '../styles/playlist.style';
import useModalStore from "../store/modalStore";
import useCartStore from "../store/cartStore";

function PlayList () {
    const { cartItems, total } = useCartStore();
    const { openModal } = useModalStore();

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
                <P.Button onClick={() => {openModal}}>
                    장바구니 초기화
                </P.Button>
            </P.Footer>
        </P.Container>
    );
}

export default PlayList