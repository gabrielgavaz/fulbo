/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarFormularioActualizar(clientAPI) {
    try {
        let inputPosicion= clientAPI.evaluateTargetPath('#Page:UpdateJugador/#Control:InputUpdatePosicion').getValue();
        return inputPosicion[0].ReturnValue;
    } catch (error) {
        alert(error)
    }
}


