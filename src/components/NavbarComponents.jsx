const NavbarComponent = function (props) {
  console.log("PROPS NavbarComponent", props);
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "15px 0",
        width: "100%",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          gap: "50px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Chi siamo
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
