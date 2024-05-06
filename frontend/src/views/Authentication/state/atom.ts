import { atom } from "recoil";

export const loggedUserState = atom<string>({
  key: "loggedUserState",
  default: '', 
});
