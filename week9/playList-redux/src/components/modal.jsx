import ModalButton from "./modal-button";
import * as M from '../styles/modal.style'

const Modal = ({children}) => {
    return(
        <M.Container onClick={() => {}}>
            <div>
                {children}
                <ModalButton />
            </div>
        </M.Container>
    )
}

export default Modal;