/* export default class {
    static Refresh(clientAPI){
        let pageProxy=clientAPI.getPageProxy();
        return pageProxy.redraw();
    }
} */

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function RefreshListaJugadores(clientAPI) {
    try {
        
        /* if(clientAPI.getControls()){ //si hay controles de la pagina
            let controls= clientAPI.getControls(); // los obtengo
            for( let i=0; i<controls.length;i++){
                controls[i].redraw(); //refresco todos los controles
            }
        } */
        let pageProxy =clientAPI.getPageProxy();
        pageProxy.redraw();

    } catch (error) {
        alert(error)
    }
}
