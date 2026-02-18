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
            <h3>📦 Control de stock</h3>
            <p>Gestión de productos, cantidades y movimientos.</p>
            <span>Desde $XX.XXX</span>
          </div>

          <div className="extra__card">
            <h3>📅 Turnos / Reservas</h3>
            <p>Agenda online para clientes y administración interna.</p>
            <span>Desde $XX.XXX</span>
          </div>

          <div className="extra__card">
            <h3>👥 Gestión de clientes</h3>
            <p>Base de datos, historial y seguimiento.</p>
            <span>Desde $XX.XXX</span>
          </div>

          <div className="extra__card">
            <h3>🧠 Panel de administración</h3>
            <p>Panel privado para manejar tu sistema.</p>
            <span>Incluido en Pro / Negocio</span>
          </div>

          <div className="extra__card">
            <h3>🔌 Integraciones</h3>
            <p>WhatsApp, email, APIs, servicios externos.</p>
            <span>A definir</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
