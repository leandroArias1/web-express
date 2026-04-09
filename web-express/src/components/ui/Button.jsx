import { motion } from 'framer-motion'

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  target,
  rel,
  className = ''
}) => {
  const Component = href ? 'a' : 'button'
  const baseClassName = `btn btn--${variant} ${className}`.trim()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={baseClassName}
      >
        <span className="btn__glow" />
        <span className="btn__text">{children}</span>
      </Component>
    </motion.div>
  )
}

export default Button
