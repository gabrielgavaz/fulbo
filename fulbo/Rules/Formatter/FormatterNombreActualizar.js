import Formateo from "../Libs/Formateo";

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterNombreActualizar(clientAPI) {
    try {
        return Formateo.Formateo(clientAPI,'#Page:UpdateJugador/#Control:InputUpdateNombre/#Value');
    } catch (error) {
        alert(error)
    }
    
}
