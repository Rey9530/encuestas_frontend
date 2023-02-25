import { axiosInstance, axiosPublicInstance, BASE_URL } from '../configurations/axios';

const path = BASE_URL.concat('/api/auth/');

export const login = (request:any) => {
  return axiosInstance.post(path.concat('login'), request);
};

export const signOut = () => {
  return axiosInstance.post(path.concat('cerrar-sesion'));
};

export const createUser = async (data:any) => {
  return axiosInstance.post(path.concat('registrar'), data);
};

export const recoverPassword = async (data = { correo_electronico: '' }) => {
  return axiosInstance.post(path.concat('contrasenia/reiniciar'), data);
};

export const validatePasswordResetToken = async (token = '') => {
  return axiosPublicInstance.get(
    path.concat('contrasenia/reiniciar/validar-token?tipo_usuario=1'),
    {
      headers: {
        'x-access-token': token
      }
    }
  );
};

/**
 * this function is used to update the user's password
 * when the user forgot his password
 */
export const updatePassword = async (contrasenia = '', token = '') => {
  return axiosPublicInstance.put(
    path.concat('contrasenia/reiniciar'),
    { contrasenia },
    {
      headers: {
        'x-access-token': token
      }
    }
  );
};

export const refreshToken = async (data = { id: 0, correo_electronico: '', token: '' }) => {
  return axiosPublicInstance.post(path.concat('verificar-sesion'), data);
};

export const loginWithFirebase = (data = { correo_electronico: '', nombre: '', token: '' }) => {
  return axiosInstance.post(path.concat('iniciar-sesion/firebase'), data);
};

/**
 * this function is used to update the user's password
 * when the user is logged in
 */
export const updateUserPassword = async (contrasenia = '') => {
  return axiosInstance.post(path.concat('contrasenia/actualizar'), {
    contrasenia
  });
};

export const getUserInformation = () => {
  return axiosInstance.get(path.concat('perfil'));
};

export const updateUserInformation = (data = { nombres: '', apellidos: '', pais: 0 }) => {
  return axiosInstance.put(path, data);
};

export const validateVerificationCode = (pin:String, token:any) => {
  return axiosPublicInstance.post(
    path.concat('validar-pin'),
    { pin },
    { headers: { 'x-access-token': token } }
  );
};

export const resendVerificationCode = (token:any) => {
  return axiosPublicInstance.get(path.concat('reenviar-pin'), {
    headers: { 'x-access-token': token }
  });
};

export const verifyAccount = (data = { correo_electronico: '', token: '' }) => {
  return axiosPublicInstance.post(path.concat('activar-cuenta'), data);
};
