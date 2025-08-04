// stores/scrollStore.ts
import { create } from 'zustand';

interface ScrollStore {
  footerRef: HTMLElement | null;
  setFooterRef: (ref: HTMLElement) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  footerRef: null,
  setFooterRef: (ref) => set({ footerRef: ref }),
}));