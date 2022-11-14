import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#root');

function Modal(props) {
    const { open, onOpen, name } = props;

    return open ? createPortal(
        <div className="modal" onClick={() => onOpen(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                Дякуємо, товар <span className="nameOfProduct">{name}</span>  доданий в корзину!
            </div>
        </div>, modalRoot
    ) : null;
}

export default Modal;