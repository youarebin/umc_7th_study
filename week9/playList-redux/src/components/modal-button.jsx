import * as M from '../styles/modal.style';
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const ModalButton = () => {
    const dispatch = useDispatch();

    return(
        <M.BtnWrapper>
            <M.YesBtn 
                type="button"
                onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                }}
            >
            네
            </M.YesBtn>
            <M.NoBtn 
                type="button"
                onClick={() => {
                    dispatch(closeModal());
                }}
            >
            아니요
            </M.NoBtn>
        </M.BtnWrapper>
    );
};

export default ModalButton;