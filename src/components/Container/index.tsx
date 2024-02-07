export const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-[1220px] mx-auto flex items-center h-[100vh] justify-center  ">
      {children}
    </div>
  )
}
