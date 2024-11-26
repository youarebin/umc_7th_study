import reactDom from 'react-dom'

const ModalPotal = ({children}) => {
    if(typeof window === "undefined") {
        return null;
    }

    const node = document.getElementById("potal");

    return reactDom.createPortal(children, node);
};

export default ModalPotal;