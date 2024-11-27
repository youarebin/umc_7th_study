import './App.css'
import PlayList from './components/playlist';
import Modal from './components/modal';
import Navbar from './components/navbar';
import ModalPotal from './components/modalPotal';
import useModalStore from './store/modalStore';
import useCartStore from './store/cartStore';
import { useEffect } from 'react';

function App() {
  const { isOpen } = useModalStore();
  const { cartItems, calculateTotals } = useCartStore();

  useEffect(() => {
    calculateTotals();
  }, [cartItems, calculateTotals])

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
