import { forwardRef, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
  errorMessage?: string
  icon?: () => ReactNode
}

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, className, disabled, icon, ...rest }, ref) => (
    <div>
      <label className="relative flex min-h-10">
        <input
          {...rest}
          ref={ref}
          disabled={disabled}
          aria-invalid={!!errorMessage}
          className={twMerge(
            "flex flex-1 p-2 bg-white disabled:bg-[#9b9b9b] text-black transition-[outline-color] peer py-3 outline outline-1 outline-gray-400 rounded-md peer placeholder:text-transparent focus-within:outline-2 focus-within:outline-black focus-within:placeholder:text-gray-400 aria-[invalid=true]:outline-2 aria-[invalid=true]:outline-rose-600 disabled:opacity-50 disabled:cursor-not-allowed",
            className,
            "focus:text-[#205FF3] focus:outline-[#205FF3]"
          )}
        />
        <span
          aria-invalid={!!errorMessage}
          className={twMerge(
            `bottom-[22px] disabled:bg-transparent peer-focus:bottom-[45px]  
            flex absolute h-full items-center rounded-md py-0 px-1 mx-2 cursor-text transition-all  text-gray-400 outline-gray-400
            peer-focus:h-1   peer-focus:text-sm peer-focus:rounded-none peer-focus:text-[#205FF3] peer-focus:outline-black
            peer-[:not(:placeholder-shown)]:h-1   peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:rounded-none
            peer-aria-[invalid=true]:text-roseoutline-[#CB5353] aria-[invalid=true]:peer-focus:text-[#CB5353]  aria-[invalid=true]:text-[#CB5353] 
          `,
            className,
            !disabled && "bg-white",
            "peer-required:top-0 text-xs text-gray-500 -translate-y-1/2"
          )}
        >
          {label}
        </span>
        {icon && (
          <div className="relative right-7 top-3 peer-focus:text-[#205FF3]">
            {icon()}
          </div>
        )}
      </label>
      <small className="text-roseoutline-rose-600 text-[#CB5353]  ">
        {errorMessage}
      </small>
    </div>
  )
)
