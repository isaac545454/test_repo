import { forwardRef, ReactNode } from "react"

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
  errorMessage?: string
  icon?: () => ReactNode
}

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, icon, ...rest }, ref) => (
    <div>
      <label className="relative flex min-h-10">
        <input
          {...rest}
          ref={ref}
          aria-invalid={!!errorMessage}
          className={
            "flex flex-1 p-2 bg-white text-black transition-[outline-color] peer py-3 outline outline-1 outline-gray-400 rounded-md peer placeholder:text-transparent focus-within:outline-2 focus-within:outline-black focus-within:placeholder:text-gray-400 aria-[invalid=true]:outline-2 aria-[invalid=true]:outline-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
          }
        />
        <span
          className="
         
          bottom-[42px]  bg-white 
            flex absolute h-full items-center rounded-md py-0 px-1 mx-2 cursor-text transition-all  text-gray-400 outline-gray-400
            peer-focus:h-1 peer-focus:-translate-y-[calc(50%+px)] peer-focus:text-sm peer-focus:rounded-none peer-focus:text-black peer-focus:outline-black
            peer-[:not(:placeholder-shown)]:h-1 peer-[:not(:placeholder-shown)]:-translate-y-[calc(50%+2px)] peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:rounded-none
            peer-aria-[invalid=true]:text-roseoutline-rose-600 
          "
        >
          {label}
        </span>
        {icon && <div className="relative right-7 top-3">{icon()}</div>}
      </label>
      <small className="text-roseoutline-rose-600 text-red-500">
        {errorMessage}
      </small>
    </div>
  )
)
