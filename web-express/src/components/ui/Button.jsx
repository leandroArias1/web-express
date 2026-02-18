import { motion } from 'framer-motion'

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  target,
}) => {
  const Component = href ? 'a' : 'button'

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        target={target}
        className={`btn btn--${variant}`}
      >
        <span className="btn__glow" />
        <span className="btn__text">{children}</span>
      </Component>
    </motion.div>
  )
}

export default Button
