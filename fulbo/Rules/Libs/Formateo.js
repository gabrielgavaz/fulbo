export default class {
    static Formateo(clientAPI, sPath){
        let input= clientAPI.evaluateTargetPath(sPath); //tomo el nombre del input
        input= input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); // lo formateo 
        return input;
    }
}