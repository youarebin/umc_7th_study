import { useEffect } from 'react';
import './App.css'
import PlayList from './components/playlist'
import Navbar from './components/navbar';
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice';
import ModalPotal from './components/modalPotal';
import Modal from './components/modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch])

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <PlayList/>
        {isOpen &&
          <ModalPotal>
            <Modal>
              <h4>담아두신 모든 음반을 모두 삭제하시겠습니까?</h4>              
            </Modal>
          </ModalPotal>
        }
      </main>
    </>
  )
}

export default App
