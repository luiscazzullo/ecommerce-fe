import "./formLogin.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const FormLogin = () => {
  const history = useHistory();
  const { login, auth, message } = useContext(AuthContext);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formLogin;

  const handleOnChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    login(formLogin);
    if (auth) {
      history.push("/");
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">Inicia Sesion</div>
        <p>{message}</p>
        <form onSubmit={handleOnSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleOnChange}
            value={email}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            value={password}
          />
          <div className="password">¿Olvidaste tu contraseña?</div>
          <input className="button" type="submit" value="INICIAR SESION" />
        </form>
        <div>
          No tienes cuenta aun?{" "}
          <Link to="/registro" className="link">
            Crear cuenta
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
