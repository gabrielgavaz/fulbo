/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterPosicion(clientAPI) {
    try {
        const sDatos=clientAPI.binding; //tomo lo que esta bindeado
        let sColor="";
    
        switch (sDatos.POSICION) { //TOMO LA PROP QUE ME INTERESA
            case "Arquero":
                sColor="Green"
                break;
            case "Defensor":
                sColor="Mango"
                break;
            case "Mediocampista":
                sColor="Red"
                break;
            case "Delantero":
                sColor="Blue"
                break;
            default:
                break;
        }
        return sColor;
    } catch (error) {
        alert(error)
    }
    
}
