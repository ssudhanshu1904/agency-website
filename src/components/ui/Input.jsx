import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full border border-primary/40 bg-slate-900/70 px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/45',
        'transition-all duration-300 focus:border-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/25',
        className,
      )}
      {...props}
    />
  )
})

export default Input
