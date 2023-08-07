/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ExitoActualizar(clientAPI) {
    try {
        clientAPI.executeAction('/LigaArgentinaFutbol/Actions/CRUD/CerrarPagina.action');
        clientAPI.executeAction('/LigaArgentinaFutbol/Actions/CRUD/ExitoUpdate.action'); 
    } catch (error) {
        alert(error)
    }
      
}
