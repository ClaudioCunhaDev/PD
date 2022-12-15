import { atom, useRecoilState } from "recoil";

const modalAtom = atom<boolean>({
  key: "modalState",
  default: false,
});

export const useModalState = () => {
  return useRecoilState(modalAtom);
};
