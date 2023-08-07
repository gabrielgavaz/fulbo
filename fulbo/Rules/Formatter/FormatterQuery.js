/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterQuery(clientAPI) {
    try {
        let page = clientAPI.getPageProxy();
        let oClientData = page.getClientData();
        return oClientData.Datos;
    } catch (error) {
        alert(error)
    }
    
}
