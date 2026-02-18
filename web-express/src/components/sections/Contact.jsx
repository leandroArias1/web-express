const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const nombre = form.nombre.value;
    const email = form.email.value;
    const plan = form.plan.value;

    const extras = Array.from(
      form.querySelectorAll('input[name="extras"]:checked')
    ).map((e) => e.value);

    const mensaje = form.mensaje.value;

    const subject = encodeURIComponent("Consulta desde WebExpress");

    const body = encodeURIComponent(`
Nombre: ${nombre}
Email: ${email}
Plan elegido: ${plan}

Extras:
${extras.length ? "- " + extras.join("\n- ") : "Ninguno"}

Mensaje:
${mensaje}
    `);

    window.location.href = `mailto:leanahuelarias@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section section--soft" id="contacto">
      <div className="section__container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__subtitle">
          Completá el formulario y te respondemos por mail
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
              <option value="Starter">Starter</option>
              <option value="Pro">Pro</option>
              <option value="Negocio">Negocio</option>
            </select>

            {/* EXTRAS */}
            <div className="contact__extras">
              <p>Extras</p>
              <label>
                <input type="checkbox" name="extras" value="SEO básico" />
                SEO básico
              </label>

              <label>
                <input type="checkbox" name="extras" value="WhatsApp integrado" />
                WhatsApp integrado
              </label>

              <label>
                <input type="checkbox" name="extras" value="Sistema a medida" />
                Sistema a medida
              </label>
            </div>

            <textarea
              name="mensaje"
              placeholder="Contanos qué necesitás"
              required
            />

            <button type="submit" className="btn btn--primary">
              Enviar por mail
            </button>
          </form>

          {/* CTA */}
          <div className="contact__cta">
            <h3>¿Preferís escribir directo?</h3>
            <p>
              Podés mandarnos un mensaje por WhatsApp y lo vemos sin vueltas.
            </p>

            <a
              href="https://wa.link/1x6woe"
              className="btn btn--outline"
              target="_blank"
              rel="noreferrer"
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
