import * as React from "react";

import { cn } from "@/lib/utils";

// interface for input
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="w-full pb-[8px] pr-[8px] border-b-[1px] border-b-muted-foreground flex justify-between items-center">
        <input
          type={type}
          className={cn(
            "text-[1rem] text-secondary-foreground outline-none w-[80%]",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className="">
            {icon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
