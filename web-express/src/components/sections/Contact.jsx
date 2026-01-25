const Contact = () => {
 const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const nombre = form.nombre.value;
  const email = form.email.value;
  const plan = form.plan.value;
  const mensaje = form.mensaje.value;

  const texto = `
Hola! 👋
Quiero una web.

Nombre: ${nombre}
Email: ${email}
Plan elegido: ${plan}

Mensaje:
${mensaje}
  `;

  const textoEncoded = encodeURIComponent(texto);

  window.open(
    'https://wa.me/5492612113198?text=' + textoEncoded,
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
          {/* FORM */}
          <form className="contact__form" onSubmit={handleSubmit}>
  <input
    type="text"
    name="nombre"
    placeholder="Nombre"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    required
  />

  <select name="plan" required>
    <option value="">Elegí un plan</option>
    <option value="Landing">Express</option>
    <option value="Web Express">Negocio</option>
    <option value="Web Pro">Pro</option>
    <option value="No estoy seguro">No estoy seguro</option>
  </select>

  <textarea
    name="mensaje"
    placeholder="Contanos qué necesitás"
    required
  />

  <button type="submit" className="btn btn--primary">
    Enviar por WhatsApp
  </button>
</form>

          {/* CTA */}
          <div className="contact__cta">
            <h3>¿Preferís hablar directo?</h3>
            <p>
              Si querés, podés escribirnos ahora mismo y lo vemos sin vueltas.
            </p>

            <a
              href="https://wa.me/549XXXXXXXXXX"
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
