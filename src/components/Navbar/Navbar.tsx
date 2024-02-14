import "./Navbar.scss";

const Navbar = () => {
  return (
    <header id="navbar">
      <a href="#home">Carretera</a>
      <nav>
        <ul>
          <li>
            <a href="#page1">Conductor</a>
          </li>
          <li>
            <a href="#page2">Nosotros</a>
          </li>
          <li>
            <a href="#page3">Contactanos</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="secundary">Iniciar Sesion</button>
        <button className="primary">Registrarse</button>
      </div>
    </header>
  );
};

export default Navbar;
