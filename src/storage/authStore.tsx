import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';


const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        userInformation: null,
        setUserInformation: (userInformation:any) =>
          set((_:any) => ({
            userInformation,
          })),
        updateUserInformation: (
          data = { correo: '', expiracion: '', token: '', usuario: '' }
        ) =>
          set((state:any) => ({
            userInformation: { ...state.userInformation, ...data },
          })),
      }),
      {
        name: 'userInformation',
        getStorage: () => localStorage,
      }
    )
  )
);

export { useAuthStore };
