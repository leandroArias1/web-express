const Extras = () => {
  return (
    <section className="section section--default" id="extras">
      <div className="section__container">
        <h2 className="extras__title">Extras y sistemas a medida</h2>
        <p className="extras__subtitle">
          Disponibles para planes <strong>Pro</strong> y <strong>Negocio</strong>
        </p>

        <div className="extras__grid">
          <div className="extra__card">
            <h3>📦 Sistema de stock</h3>
            <p>Gestión de productos, cantidades y movimientos.</p>
            <span>Desde $80.000 ARS</span>
          </div>

          <div className="extra__card">
            <h3>📅 Sistema de Turnos / Reservas</h3>
            <p>Agenda online para clientes y administración interna.</p>
            <span>Desde $70.000 ARS</span>
          </div>

          <div className="extra__card">
            <h3>📊 Panel administrador</h3>
            <p>Base de datos, historial y seguimiento.</p>
            <span>Desde $50.000 ARS</span>
          </div>

          <div className="extra__card">
            <h3>📈 SEO avanzado y optimización</h3>
            <p>Optimización técnica avanzada, mejora de velocidad de carga y posicionamiento SEO.</p>
            <span>Incluido en Pro / Negocio</span>
            <span> Desde $30.000 ARS</span>
          </div>

          <div className="extra__card">
            <h3>🔌 Integraciones</h3>
            <p>WhatsApp, email, APIs, servicios externos.</p>
            <span>Desde $20.000 ARS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
