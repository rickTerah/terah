import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Code = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `rounded-md border bg-gruvbox-light-bg dark:bg-gruvbox-dark-bg p-4
          font-mono text-sm text-gruvbox-light-fg dark:text-gruvbox-dark-fg
          overflow-x-auto`,
          className,
        )}
        {...props}
      />
    );
  },
);
Code.displayName = "Code";

export { Code };
