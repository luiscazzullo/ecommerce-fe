import "./formLogin.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import clientAxios from "../../config/clientAxios";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const FormLogin = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);
  const [notUser, setNotUser] = useState(false);
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
    const { data } = await clientAxios.get("/users", {
      params: { email: email, password: password },
    });
    if (data.length > 0) {
      console.log(data);
      login(data);
      history.push("/");
    } else {
      setNotUser(true);
      setFormLogin({ email: "", password: "" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">Inicia Sesion</div>
        {notUser && (
          <>
            <div className="alert">USUARIO O CONTRASEÑA INCORRECTA</div>
          </>
        )}
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
          No tienes cuenta aun? <Link className="link">Crear cuenta</Link>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
