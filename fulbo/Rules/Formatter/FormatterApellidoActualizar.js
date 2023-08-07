import Formateo from "../Libs/Formateo";

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterApellidoActualizar(clientAPI) {
    try {
        return Formateo.Formateo(clientAPI,'#Page:UpdateJugador/#Control:InputUpdateApellido/#Value');
    } catch (error) {
        alert(error)
    }
    
}
