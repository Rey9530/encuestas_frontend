import { useState } from "react";
import { Loader } from "react-feather";
import { useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import TextField from "../components/inputs/TextField";
import { login } from "../services";
import { useAuthStore } from "../storage/authStore";

export const Login = (props: any) => {
  // const history = useNavigate();
  // history("dara");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const setUserInformation = useAuthStore(
    (state: any) => state.setUserInformation
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = async (form:any) => {
    setIsLoggingIn(true);
    const request = {
      email: form.email,
      Password: form.password
    };

    login(request)
      .then(({ data  }) => {
        console.log(data.data);
        setUserInformation(data.data); 
        location.href = '/app/home'; 
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error("Error de credenciales");
        } else {
          toast.error(error.response.data.error);
        }
        console.error('Error trying to log in ', error.response);
      })
      .finally(() => setIsLoggingIn(false));
  };

  return (
    <>
      <div className="row">
        <div className="col-6 d-lg-flex d-none h-100 my-auto top-0 start-0 text-center justify-content-center flex-column">
          <div className="auth-cover-bg-image"></div>
          <div className="auth-overlay"></div>
          <div className="auth-cover">
            <div className="position-relative">
              <img src="/assets/img/auth-cover.svg" alt="auth-img" />
              <h2 className="mt-5 text-white font-weight-bolder px-2">
                Encuestas Personalizadas
              </h2>
              <p className="text-white px-2">
                Crea encuestas faciles de responder y enviar para que tu puedas
                saber lo que tus clientes piensan atravez de reportes y graficas
              </p>
            </div>
          </div>
        </div>

        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-12 d-flex flex-column align-self-center ms-lg-auto me-lg-0 mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <h2>Iniciar Sesión</h2>
                  <p>
                    Ingrese su correo electrónico y contraseña para iniciar
                    sesión
                  </p>
                </div>
                <Form
                  className="theme-form needs-validation mt-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-md-12">
                    <div className="mb-3">
                      {/* <label className="form-label">Correo Electronico</label> */}
                      {/* <input type="email" className="form-control" /> */}
                      <FormGroup>
                        <TextField
                          id="email"
                          name="email"
                          className={`form-control`}
                          type="email"
                          rules={{
                            required: "El correo electronico es requerido",
                          }}
                          label={"Correo Electronico"}
                          control={control}
                          errors={errors}
                          max={undefined}
                        />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4">
                      {/* <label className="form-label">Contraseña</label>
                    <input type="text" className="form-control" /> */}

                      <FormGroup>
                        <TextField
                          id="password"
                          name="password"
                          className={`form-control`}
                          type="password"
                          rules={{
                            required: "La Contraseña es requerida",
                          }}
                          label={"Contraseña"}
                          control={control}
                          errors={errors}
                          max={undefined}
                        />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <div className="form-check form-check-primary form-check-inline">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          id="form-check-default"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form-check-default"
                        >
                          Acuérdate de mí
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-4">
                      <button
                        className="btn btn-secondary w-100"
                        type="submit"
                        disabled={isLoggingIn}
                      >
                        {isLoggingIn && (
                          <Loader size={15} className="fa-spin mr-1" />
                        )}
                        INICIAR SESIÓN
                      </button>
                    </div>
                  </div>
                </Form>
                <div className="col-12">
                  <div className="text-center">
                    <p className="mb-0">
                      ¿No tienes una cuenta?{" "}
                      <a href="#" className="text-warning">
                        Registrarme
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
