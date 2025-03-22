import { create } from "zustand";

type Store = {
  userData: {
    name: string;
    accountId: number;
    balance: number;
    credit: number;
  };
  action: "cashIn" | "cashOut" | null;
  setAction: (currentAction: "cashIn" | "cashOut" | null) => void;
  changeBalance: (balanceAmount: number, creditAmount: number) => void;
};

export const useStore = create<Store>((set) => ({
  userData: {
    name: "Elvin Huseynov",
    accountId: 1,
    balance: 100,
    credit: 0,
  },
  action: null,
  setAction: (currentAction: "cashIn" | "cashOut" | null) =>
    set({
      action: currentAction,
    }),
  changeBalance: (balanceAmount: number, creditAmount: number) =>
    set((state) => ({ userData: { ...state.userData, balance: balanceAmount, credit: creditAmount } })),
}));
