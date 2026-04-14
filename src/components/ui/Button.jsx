import { cn } from '../../utils/cn'

const variants = {
  primary:
    'bg-primary/90 text-white border border-primary/60 shadow-neon hover:bg-primary hover:shadow-neon-strong focus-visible:ring-2 focus-visible:ring-primary/70',
  outline:
    'bg-transparent text-foreground border border-primary/60 hover:bg-primary/10 hover:shadow-neon focus-visible:ring-2 focus-visible:ring-primary/70',
  ghost:
    'bg-transparent text-foreground border border-transparent hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-primary/70',
}

function Button({ className, variant = 'primary', type = 'button', children, ...props }) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-none px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300',
        'focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
