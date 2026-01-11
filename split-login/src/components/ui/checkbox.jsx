import * as React from "react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border-2 border-input/50 bg-background/50 backdrop-blur-sm text-foreground focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background cursor-pointer transition-all duration-200 checked:bg-foreground checked:border-foreground hover:border-foreground/50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
