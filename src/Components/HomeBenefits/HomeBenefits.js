const HomeBenefits = () => {
  return (
    <section className="homeBenefitsContainer px-2">
      <h1 className="benefitsTitle mt-3">
        Paga menos y comprá más, con estos increíbles descuentos
      </h1>
      <section className="ahoraBenefits my-4">
        <h3>Ahora 30, 24, 18 y 12</h3>
        <p>
          Solo para productos seleccionados con Visa, Master, Cabal y Amex
          bancarias.
          
        </p>
        <a>
          <small>Ver términos y condiciones</small>
        </a>
      </section>
      <section className="creditCardBenefits">
        <h3>¡En hasta 6 y 9 cuotas sin interés en todo el sitio!</h3>
        <h6>
          Solo en productos seleccionados y sujeto a disponibilidad en stock
        </h6>
      </section>
      <section className="bankTransferBenefits my-4">
        <h3>¡Hasta 15% de descuento en todos los prductos haciendo transferencia bancaria!</h3>
        <h6>
          Comprá eso que tanto queres, sin pagar de mas.
        </h6>
      </section>
    </section>
  );
}

export default HomeBenefits;