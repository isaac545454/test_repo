import { Link as LinkReactRouter } from "react-router-dom"

export const Link = (props: React.ComponentProps<typeof LinkReactRouter>) => {
  return (
    <LinkReactRouter
      {...props}
      className="text-blue-600 decoration-blue-600 underline decoration-from-font border-blue-600 hover:text-blue-800 hover:border-blue-800"
    />
  )
}
