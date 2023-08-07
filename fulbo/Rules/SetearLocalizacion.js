import Geolocalizacion from './Geolocalizacion';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SetearLocalizacion(clientAPI) {
    try {
        let pLatitud = Geolocalizacion.getLatitud();
        let pLongitud = Geolocalizacion.getLongitud();
        let oClientData = clientAPI.evaluateTargetPathForAPI('#Page:Equipos').getClientData();
           
        Promise.all([pLatitud, pLongitud]).then(function (aResults) {
            if(aResults[0]){
                oClientData.Latitud = aResults[0];
            } else {
                oClientData.Latitud = "1";
            }

            if(aResults[1]){
                oClientData.Longitud = aResults[1];
            } else {
                oClientData.Longitud = "1";
            }

            clientAPI.executeAction('/LigaArgentinaFutbol/Actions/NavToEquiposCercanos.action');
        }.bind(this)).catch(function() {
        });
    } catch (error) {
        alert(error)
    }
}
