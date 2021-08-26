const Layout = ({ children}) =>{
  return(
    <>
    <header>
      <h1>soy el header</h1>
    </header>
  {children}
  <footer>
    <h1>soy el footer</h1>
  </footer>
  </>
  )
}
export default Layout;