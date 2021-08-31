import './Footer.css'

const Footer = () => {
  return (
    <footer className="d-flex align-items-center justify-content-around">
        <section className="amazonas-footer-logo">
          <h2>Amazonas</h2>
        </section>
        <section className="social-media-footer">
          <ul>
            <li className="social-media-name">
              <a href="#">Facebook</a>
            </li>
            <li className="social-media-name">
              <a href="#">Instagram</a>
            </li>
            <li className="social-media-name">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </section>
        <section className="all-rights-reserved">
          <p>
            <small>Todos los derechos reservados</small>
          </p>
        </section>
    </footer>
  );
}

export default Footer;