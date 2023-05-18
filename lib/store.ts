import { create } from 'zustand';

interface GlobalState {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  menuIsOpen: false,
  setMenuIsOpen: (menuIsOpen) => set({ menuIsOpen }),
}));
