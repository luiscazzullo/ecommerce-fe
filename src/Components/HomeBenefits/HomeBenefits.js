import './HomeBenefits.css';
import visaLogo from './Images/visaLogo.png';
import mastercardLogo from './Images/mastercardLogo.png';
import americanExpressLogo from './Images/americanExpressLogo.png';
import ahora12 from './Images/ahora12.svg';
import ahora18 from './Images/ahora18.svg';
import ahora24 from './Images/ahora24.svg';
import ahora30 from './Images/ahora30.svg';

const HomeBenefits = () => {
  return (
    <section className="homeBenefitsContainer container text-center">
      <h1 className="benefitsTitle mt-4">
        Paga menos y comprá más, con estos increíbles descuentos
      </h1>
      <section className="ahoraBenefits my-5">
        <h3>Ahora 12, 18, 24 y 30</h3>
        <p>
          Solo para productos seleccionados con Visa, Master, Cabal y Amex
          bancarias.
        </p>
        <div className="ahoraPlanBenefits mb-2">
          <img src={ahora12} className="ahoraPlaceholder mx-2" />
          <img src={ahora18} className="ahoraPlaceholder mx-2" />
          <img src={ahora24} className="ahoraPlaceholder mx-2" />
          <img src={ahora30} className="ahoraPlaceholder mx-2" />
        </div>
        <a>
          <small>Ver términos y condiciones</small>
        </a>
      </section>
      <section className="creditCardBenefits">
        <h3>¡En hasta 6 y 9 cuotas sin interés en todo el sitio!</h3>
        <h6>
          Solo en productos seleccionados y sujeto a disponibilidad en stock
        </h6>
        <div className="card-images">
          <img src={visaLogo} className="cardImgPlaceholder mx-2" />
          <img src={mastercardLogo} className="cardImgPlaceholder mx-2" />
          <img src={americanExpressLogo} className="cardImgPlaceholder mx-2" />
        </div>
      </section>
      <section className="bankTransferBenefits my-5">
        <h3>
          ¡Hasta 15% de descuento en todos los prductos haciendo transferencia
          bancaria!
        </h3>
        <h6>Comprá eso que tanto queres, sin pagar de mas.</h6>
      </section>
    </section>
  );
}

export default HomeBenefits;