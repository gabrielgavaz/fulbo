import * as app from '@nativescript/core/application';
import { IControl } from 'mdk-core/controls/IControl';
import { BaseObservable } from 'mdk-core/observables/BaseObservable';
import { EventHandler } from 'mdk-core/EventHandler';

export class ClassMapa extends IControl {
    private _observable: BaseObservable;
    private _mapView: any;
    private _geo: any;
    private _gMap: any;
    private _marker: any;
    private _ubicacion = {
        Latitud: 0,
        Longitud: 0
    }

    public initialize(props: any): any {
        super.initialize(props);

        var that = this;

        var oProperties = this.definition().data.ExtensionProperties.Prop;
        // if (oProperties) {
        //     var property = this.definition().data.ExtensionProperties.Prop;
        //     alert(property.Latitud);
        //     alert(property.Longitud);
        //     this._ubicacion.Latitud = Number(property.Latitud); //"-34.617660";
        //     this._ubicacion.Longitud = Number(property.Longitud); //"-58.408751";
        // }-34.8236, -58.5289

        this.valueResolver().resolveValue([oProperties.Latitud, oProperties.Longitud
        ], this.context)
            .then((aDatos) => {
                that._ubicacion.Latitud = Number(aDatos[0]);
                that._ubicacion.Longitud = Number(aDatos[1]);


            });

        if (app.android) {
            //You will display the Google Maps in a MapView.For more details on Google Maps API for android, visit
            //https://developers.google.com/android/reference/com/google/android/gms/maps/package-summary

            this._mapView = new com.google.android.gms.maps.MapView(this.androidContext());
            var localeLanguage = java.util.Locale;

            //GeoCoder is required to convert a location to get latitude and longitude
            this._geo = new android.location.Geocoder(this.androidContext());
            this._mapView.onCreate(null);
            this._mapView.onResume();

            //when mapview control is used, all the lifecycle activities has to be frowaded to below methods.
            app.android.on(app.AndroidApplication.activityPausedEvent, this.onActivityPaused, this);
            app.android.on(app.AndroidApplication.activityResumedEvent, this.onActivityResumed, this);
            app.android.on(app.AndroidApplication.saveActivityStateEvent, this.onActivitySaveInstanceState, this);
            app.android.on(app.AndroidApplication.activityDestroyedEvent, this.onActivityDestroyed, this);
            var that = this;

            //A GoogleMap must be acquired using getMapAsync(OnMapReadyCallback).
            //The MapView automatically initializes the maps system and the view

            var mapReadyCallBack = new com.google.android.gms.maps.OnMapReadyCallback({
                onMapReady: (gMap) => {
                    that._gMap = gMap;
                    var zoomValue = 6.0;
                    that._gMap.setMinZoomPreference = zoomValue;
                    var latLng = new com.google.android.gms.maps.model.LatLng(that._ubicacion.Latitud, that._ubicacion.Longitud),
                    latLngBoca = new com.google.android.gms.maps.model.LatLng(-34.63545197766191, -58.36479921954919),
                    latLngRiver = new com.google.android.gms.maps.model.LatLng(-34.54520017649293, -58.44949453304655),
					latLngIndependiente = new com.google.android.gms.maps.model.LatLng(-34.67009613932534, -58.371351433039756),
                    latLngCasla = new com.google.android.gms.maps.model.LatLng(-34.651244188717975, -58.439601590712535);
                    that._gMap.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(latLng).title("Ubicación"));
                    that._gMap.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(latLngBoca).title("Boca Juniors"));
                    that._gMap.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(latLngRiver).title("River Plate"));
					that._gMap.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(latLngIndependiente).title("Independiente"));
                    that._gMap.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(latLngCasla).title("San Lorenzo"));
                    that._gMap.moveCamera(new com.google.android.gms.maps.CameraUpdateFactory.newLatLng(latLng));
                    that._gMap.animateCamera(new com.google.android.gms.maps.CameraUpdateFactory.newLatLngZoom(latLng,9));
                }
            });
            this._mapView.getMapAsync(mapReadyCallBack);
        }

        if (app.ios) {

            /*initiating Apple Maps
            For more details on the Apple Maps visit
            https://developer.apple.com/documentation/mapkit */
            this._mapView = MKMapView.alloc().initWithFrame(CGRectMake(0, 0, 1000, 1000));
        }
    }

    private onActivityPaused(args) {
        console.log("onActivityPaused()");
        if (!this._mapView || this != args.activity) return;
        this._mapView.onPause();
    }

    private onActivityResumed(args) {
        console.log("onActivityResumed()");
        if (!this._mapView || this != args.activity) return;
        this._mapView.onResume();
    }

    private onActivitySaveInstanceState(args) {
        console.log("onActivitySaveInstanceState()");
        if (!this._mapView || this != args.activity) return;
        this._mapView.onSaveInstanceState(args.bundle);
    }

    private onActivityDestroyed(args) {
        console.log("onActivityDestroyed()");
        if (!this._mapView || this != args.activity) return;
        this._mapView.onDestroy();
    }

    //In case of iOS you'll use CLGeocoder API to convert an address to get latitude and longitude.
    //NOTE - API getlatlang is called only on ios devices

    private getlatlang(customerAddress) {
        const that = this;
        return new Promise((resolve, reject) => {
            // var latLng = new CLGeocoder();
            // latLng.geocodeAddressStringCompletionHandler(customerAddress, function (placemarks, error) {
            //     if (error === null && placemarks && placemarks.count > 0) {
            //         var pm = placemarks[0];
            var cordinates = {
                latitiude: 0,
                longitude: 0
            }
            //         cordinates.latitiude = pm.location.coordinate.latitude;
            //         cordinates.longitude = pm.location.coordinate.longitude;
            //         resolve(cordinates);
            //     } else {
            //         reject();
            //     }
            // });
            cordinates.latitiude = that._ubicacion.Latitud;
            cordinates.longitude = that._ubicacion.Longitud;
        });
    }

    public view() {
        this.valueResolver().resolveValue([this._ubicacion.Latitud, this._ubicacion.Longitud
        ], this.context)
            .then((aDatos) => {
                this._ubicacion.Latitud = aDatos[0];
                this._ubicacion.Longitud = aDatos[1];
                if (app.ios) {
                    return this.getlatlang(this._ubicacion.Latitud)
                        .then((cordinates) => {
                            /* below code is for the apple maps */
                            var latlong = CLLocationCoordinate2DMake(cordinates.latitiude, cordinates.longitude);
                            var annotation = MKPointAnnotation.alloc().init();
                            annotation.coordinate = latlong;
                            annotation.title = "Ubicación";
                            this._mapView.centerCoordinate = latlong;
                            this._mapView.addAnnotation(annotation);
                        });
                }
            });

        if (app.android) {
            return this._mapView;
        }
        if (app.ios) {
            return this._mapView;
        }
    }

    public viewIsNative() {
        return true;
    }

    public observable() {
        if (!this._observable) {
            this._observable = new BaseObservable(this, this.definition(), this.page());
        }
        return this._observable;
    }

    public setContainer(container: IControl) {
        // do nothing
    }

    public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
        // do nothing
        return Promise.resolve();
    }
}