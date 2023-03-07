export const API_BASE_URL = "https://react-lost-pet-app.onrender.com";

import { getMe } from "lib/get-me";

// importo useRecoilValue
import { useRecoilState, useRecoilValue, atom, selector } from "recoil";

// USAMOS LA LIBRERIA RECOIL PERSIST PARA QUE LOS DATOS SE MANTENGAN EN EL LOCALSTORAGE
import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist({
  key: "data",
  storage: localStorage,
});

//// LOGIN ////

// ÁTOMO Y HOOK EMAIL
export const userEmail = atom({
  key: "userEmail",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const useUserEmail = () => useRecoilState(userEmail);

// ÁTOMO Y HOOK TOKEN
export const userToken = atom({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const useUserToken = () => useRecoilState(userToken);

//// CREATE USER ////
type dataUser = {
  fullname: string;
  email: string;
  passwordId: string;
};

// ÁTOMO Y HOOK CREATE USER
export const userCreateState = atom({
  key: "userCreate",
  default: {} as dataUser,
});

export const useUserCreate = () => useRecoilState(userCreateState);

// ÁTOMO Y HOOK PASSWORD ID
export const passId = atom({
  key: "passId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const usePassId = () => useRecoilState(passId);

// ÁTOMO Y HOOK DE IMAGEDATAURL PARA DROPZONE
export const imageDataURL = atom({
  key: "ImageDataURL",
  default: null,
});

export const useImageDataURL = () => useRecoilState(imageDataURL);

//// USERDATA ////

// SELECTOR Y HOOK USERDATA
export const userData = selector({
  key: "userData",
  get: async ({ get }) => {
    const [userToken, setUserToken] = useUserToken();
    const myUserData = await getMe(userToken);
    return myUserData;
  },
});

export const useUserData = () => useRecoilValue(userData);

// DATOS DE 1 MASCOTA PARA PODER EDITAR
export const petData = atom({
  key: "petData",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const usePetData = () => useRecoilState(petData);
