import create from 'zustand';

export const useModalStore = create((set) => ({
  isOpen: false, // 초기 상태
  openModal: () => set({ isOpen: true }), // 모달 열기
  closeModal: () => set({ isOpen: false }), // 모달 닫기
}));