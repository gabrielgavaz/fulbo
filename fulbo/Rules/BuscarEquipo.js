/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function BuscarEquipo(clientAPI) {
    try {
        let inputEquipo = clientAPI.evaluateTargetPath('#Page:Equipos/#Control:InputBuscarEquipo/#Value'); //agarro el valor del input
        let inputEquipoFormateado= inputEquipo.charAt(0).toUpperCase() + inputEquipo.slice(1).toLowerCase(); //lo formateo
        let query = `$filter=startswith(NOMBRE, '${inputEquipoFormateado}')`; // armo la query  
        let page = clientAPI.getPageProxy(); //agarro la pagina actual
        if(inputEquipo=="" || inputEquipo==undefined){ 
            query="";
        }
        let oClientData = page.getClientData(); //configuro el oclientdata
        oClientData.Datos = query; 
    } catch (error) {
        alert(error)
    }
    
}
