import Condiciones from "../condiciones/Condiciones"
const Login = ({ usuario, contrasena }) => {
    return (
        <form class="login">
            <div class="section-inputs">
                <label for="usuario" class="section">Email o Telefono</label><br />
                <input value={usuario} type="text" class="formulario"/><br />

                <label for="contrasena" class="section">Contraseña</label><br />
                <input value={contrasena} type="text" class="formulario" />

            </div> 
            <a id="olvidasteContrasena" href="#" data-toggle="modal" data-target="#recuperarContrasenaModal"
                class="recuperarContrasena">¿Has Olvidado tu contraseña?</a><br />

            <input class="button" id="boton" typeo="button" value="Iniciar sesión" />
            <p class="o">--------o----------</p>
            <Condiciones/>
        </form>
    )
}
export default Login