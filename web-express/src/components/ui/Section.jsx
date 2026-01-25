const Section = ({
  children,
  id,
  variant = 'default',
  className = ''
}) => {
  return (
    <section
      id={id}
      className={`section section--${variant} ${className}`}
    >
      <div className="section__container">
        {children}
      </div>
    </section>
  )
}

export default Section
