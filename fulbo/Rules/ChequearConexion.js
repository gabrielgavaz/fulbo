/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ChequearConexion(clientAPI) {
    try {
        let moduloConexion=clientAPI.nativescript.connectivityModule;
        let type = moduloConexion.getConnectionType();
        if(type===moduloConexion.connectionType.none){
            clientAPI.executeAction('/LigaArgentinaFutbol/Actions/SinConexion.action')
        }else{
            clientAPI.executeAction('/LigaArgentinaFutbol/Actions/ConConexion.action')
        }
    } catch (error) {
        alert(error)
    }
}
