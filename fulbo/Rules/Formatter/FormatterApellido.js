import Formateo from "../Libs/Formateo";

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterApellido(clientAPI) {
    try {
        return Formateo.Formateo(clientAPI,"#Page:AgregarJugador/#Control:InputApellido/#Value");
    } catch (error) {
        alert(error)
    }
    
}
