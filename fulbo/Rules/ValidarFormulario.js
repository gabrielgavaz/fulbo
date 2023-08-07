/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarFormulario(clientAPI) {
    try {
        let inputPosicion= clientAPI.evaluateTargetPath('#Page:AgregarJugador/#Control:InputPosicion').getValue();
        return inputPosicion[0].ReturnValue;
    } catch (error) {
        alert(error)
    }
}



