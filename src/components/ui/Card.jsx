import { cn } from '../../utils/cn'

function Card({ icon: Icon, title, description, className, children }) {
  return (
    <article
      className={cn(
        'chamfer-card border border-primary/35 bg-slate-950/70 p-6 backdrop-blur-sm transition-all duration-300',
        'hover:-translate-y-1 hover:border-primary/70 hover:shadow-neon',
        className,
      )}
    >
      {Icon ? <Icon className='mb-4 h-6 w-6 text-primary' aria-hidden='true' /> : null}
      {title ? <h3 className='mb-2 font-heading text-xl font-semibold text-foreground'>{title}</h3> : null}
      {description ? <p className='mb-4 text-sm leading-relaxed text-foreground/80'>{description}</p> : null}
      {children}
    </article>
  )
}

export default Card
