import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Benvenuto nel mio sito!</h1>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "40px" }}>
        <ImageComponent
          src="https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Esempio di immagine"
          className="img-fluid mt-3"
          style={{ border: "3px solid red", borderRadius: "15px", width: "50%", height: "auto" }}
        />
        <ButtonComponent text="Clicca qui!" className="btn btn-success" style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "lightblue" }} />
      </div>
    </>
  );
}

export default App;
