import "./login.css";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <div className="container">
        <div className="title">Inicia Sesion</div>
        <form>
          <label>Email</label>
          <input type="email" name="email" />
          <label>Contraseña</label>
          <input type="password" name="password" />
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

export default login;
