export const Layout = ({children}) => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-primary text-quaternary">
      {children}
    </div>
  )
}