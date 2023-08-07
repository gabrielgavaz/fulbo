

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ExitoCrearJugador(clientAPI) {
    try {
        clientAPI.executeAction('/LigaArgentinaFutbol/Actions/CRUD/CerrarPagina.action');
        clientAPI.executeAction('/LigaArgentinaFutbol/Actions/CRUD/ExitoCrear.action');
    } catch (error) {
        alert(error)
    }
}
