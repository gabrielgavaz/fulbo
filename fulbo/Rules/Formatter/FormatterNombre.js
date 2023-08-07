import Formateo from "../Libs/Formateo";

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterNombre(clientAPI) {
    try {
        return Formateo.Formateo(clientAPI,'#Page:AgregarJugador/#Control:InputNombre/#Value');
    } catch (error) {
        alert(error)
    }
      
}
