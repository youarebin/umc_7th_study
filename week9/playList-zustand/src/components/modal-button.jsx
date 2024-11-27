import * as M from '../styles/modal.style';
import useModalStore from "../store/modalStore";
import useCartStore from "../store/cartStore";

const ModalButton = () => {
    const { closeModal } = useModalStore();
    const { clearCart } = useCartStore();

    return(
        <M.BtnWrapper>
            <M.YesBtn 
                type="button"
                onClick={() => {
                    clearCart();
                    closeModal();
                }}
            >
            네
            </M.YesBtn>
            <M.NoBtn 
                type="button"
                onClick={() => {
                    closeModal();
                }}
            >
            아니요
            </M.NoBtn>
        </M.BtnWrapper>
    );
};

export default ModalButton;