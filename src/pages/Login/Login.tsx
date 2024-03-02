import { useFormik } from "formik";
import "./Login.scss";

import { LOGIN } from "../../libs/formik/forms";
import { FormControl, TextField } from "@mui/material";

const Login = () => {
  const { initialValues, validationSchema } = LOGIN;
  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("LOGIN =>", values);
    },
  });

  return (
    <form id="login-container" onSubmit={handleSubmit}>
      <div className="login-input">
        <FormControl fullWidth>
          <label>Correo Electrónico:</label>
          <TextField
            name="email"
            type="text"
            id="email-input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </FormControl>
      </div>
      <div className="login-input">
        <FormControl fullWidth>
          <label>Contraseña:</label>
          <TextField
            name="password"
            type="text"
            id="password-input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </FormControl>
      </div>
      <div>
        <button type="submit" className="secundary">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default Login;
