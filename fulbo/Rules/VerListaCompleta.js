/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function VerListaCompleta(clientAPI) {
    try {
        let query="";
        let page = clientAPI.getPageProxy(); 
        let oClientData = page.getClientData(); 
        oClientData.Datos = query;  
        if(clientAPI.getControls()){ 
            let controls= clientAPI.getControls(); 
            for( let i=0; i<controls.length;i++){
                controls[i].redraw(); 
            }
        }
    } catch (error) {
        alert(error)
    }
    
}
