import "./formLogin.css";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import clientAxios from "../../config/clientAxios";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const FormLogin = () => {
  const [users, setUsers] = useState([]);
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
    const foundUser = users.find(
      (user) => user.password === password && user.email === email
    );
  };

  const getUsers = async () => {
    const { data } = await clientAxios.get("/users");
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">Inicia Sesion</div>
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
