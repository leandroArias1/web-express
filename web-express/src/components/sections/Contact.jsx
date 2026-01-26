const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const nombre = form.nombre.value;
    const email = form.email.value;
    const mensaje = form.mensaje.value;

    const extrasSeleccionados = Array.from(
      form.querySelectorAll('input[name="extras"]:checked')
    ).map((extra) => `- ${extra.value}`);

    const extrasTexto =
      extrasSeleccionados.length > 0
        ? extrasSeleccionados.join('\n')
        : 'Ninguno';

    const texto = `
Hola! 👋
Quiero una web.

Nombre: ${nombre}
Email: ${email}

Extras solicitados:
${extrasTexto}

Mensaje:
${mensaje}
    `;

    window.open(
      'https://wa.me/5492612113198?text=' + encodeURIComponent(texto),
      '_blank'
    );
  };

  return (
    <section className="section section--soft" id="contacto">
      <div className="section__container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__subtitle">
          Completá el formulario y te respondemos por WhatsApp
        </p>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />

            {/* EXTRAS */}
            <div className="contact__extras">
              <h3>Extras (opcional)</h3>
              <label>
                <input type="checkbox" name="extras" value="Control de stock" />
                Stock
              </label>

              <label>
                <input type="checkbox" name="extras" value="Turnos / Reservas" />
                Turnos
              </label>

              <label>
                <input type="checkbox" name="extras" value="Gestión de clientes" />
                Clientes
              </label>

              <label>
                <input type="checkbox" name="extras" value="Panel admin" />
                Panel admin
              </label>

              <label>
                <input type="checkbox" name="extras" value="Integraciones" />
                Integraciones
              </label>
            </div>

            <textarea
              name="mensaje"
              placeholder="Contanos qué necesitás"
              required
            />

            <button type="submit" className="btn btn--primary">
              Enviar por WhatsApp
            </button>
          </form>

          <div className="contact__cta">
            <h3>¿Preferís hablar directo?</h3>
            <p>Escribinos y lo vemos sin vueltas.</p>

            <a
              href="https://wa.me/5492612113198"
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
