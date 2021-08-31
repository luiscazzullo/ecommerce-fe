import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
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
          <h5>Todos los derechos reservados</h5>
        </section>
      </div>
    </footer>
  );
}

export default Footer;