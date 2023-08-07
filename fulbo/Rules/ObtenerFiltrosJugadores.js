import Common from "./Libs/Common";

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ObtenerFiltrosJugadores(clientAPI) {
    try {
//armo array de filtros
        let filters =[];
//list picker
        let sPosicionLista = clientAPI.evaluateTargetPath('#Page:FiltrarJugadores/#Control:InputListaPosicionFiltro').getValue();
        if(sPosicionLista[0]){
            filters.push(Common.getQueryFilterEQ(clientAPI, "POSICION",`'${sPosicionLista[0].ReturnValue}'`))
        }
//tomo el ordenamiento
        let oOrden = clientAPI.evaluateTargetPath('#Page:FiltrarJugadores/#Control:OrdenamientoPosicion/#Value');
        if(oOrden){
            filters.push(oOrden)
        };

//retorno array de filtros
        return filters;
    } catch (error) {
        alert(error)
    }
}
