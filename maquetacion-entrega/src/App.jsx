
import Login from "./components/layouts/auth/Login"
import Bienvenido from "./components/layouts/bienvenido/Bienvenido"
// import Condiciones from "./components/layouts/condiciones/Condiciones"
import Img from "./components/layouts/img/Img"

function App() {
  return (
    <>
      <div class="container">
        <div class="columna1">
          <Bienvenido />
          <Login />
        </div>
        <div class="columna2">
          <Img />
        </div>
      </div>
    </>
  )
}

export default App
