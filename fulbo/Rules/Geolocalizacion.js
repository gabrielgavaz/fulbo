let geolocation = require("@nativescript/geolocation");
let CoreTypes = require('@nativescript/core/core-types');

export default class {
    static getLongitud() {
        var that = this;
        return new Promise(function (resolve, reject) {
            // ver si tiene la ubicación activada
            var locationIsEnabled = geolocation.isEnabled();
    
            if (!locationIsEnabled) {
                // pedir que la active
                geolocation.enableLocationRequest().then(function() {
                    that.getUbicacion().then(function(oUbicacion) {
                        resolve(oUbicacion.longitude)
                    });
                }).catch(function() {
                    reject()
                });
            } else {
                that.getUbicacion().then(function(oUbicacion) {
                    resolve(oUbicacion.longitude)
                });
            }
        });
	}

    static getLatitud() {
        var that = this;
        return new Promise(function (resolve, reject) {
            // ver si tiene la ubicación activada
            var locationIsEnabled = geolocation.isEnabled();

            if (!locationIsEnabled) {
                // pedir que la active
                geolocation.enableLocationRequest().then(function() {
                    that.getUbicacion().then(function(oUbicacion) {
                        resolve(oUbicacion.latitude)
                    });
                }).catch(function() {
                    reject();
                });
            } else {
                that.getUbicacion().then(function(oUbicacion) {
                    resolve(oUbicacion.latitude)
                });
            }
        });
	}

    static getUbicacion() {
        return new Promise(function (resolve, reject) {
            // Obtener coordenadas
            geolocation.getCurrentLocation({
                desiredAccuracy: CoreTypes.Enums.Accuracy.high, //This will return the finest location available
                updateDistance: 5, //Update distance filter in meters.
                timeout: 11000 //How long to wait for a location in ms.
            }).then(function (loc) {
                if (loc) {
                    resolve(loc);
                } else {
                    reject(); 
                }
            }, function (e) {
                reject(e.message);
            });
        });
	}
} 
