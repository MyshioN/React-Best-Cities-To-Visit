
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1></h1>
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to="/Home">
            Home
          </NavLink>
          <NavLink to="/Europe">
            Europe
          </NavLink>
          <NavLink to="/Usa">
            Usa
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/bookflight">
            Book Flight
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar