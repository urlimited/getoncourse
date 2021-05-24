import {MRoute} from "./MRoute";
import history from "../services/history";

/**
 * Singleton router manage class
 * @property _routes {Array<MRoute>}
 */
export class MRouter {
    _routes = [];
    _basePath = "";
    static _instance = null;

    constructor({basePath}) {
        this._basePath = basePath ?? ""
    }

    static initRouter(params = {}){
        if(this._instance === null)
            this._instance = new MRouter(params.basePath);

        return this._instance;
    }

    static isEligibleRoute(urlString){
        /**
         * @type {MRouter}
         */
        const router = this._instance;

        return !!router.getRouteNameFromUrl(urlString);
    }

    /**
     * Add routes
     * @param route {MRoute}
     * @throws Error
     * @returns {MRouter}
     */
    addRoute(route){
        if(Object.keys(this._routes).find(r => r.name === route.name))
            throw new Error(`Route is already exists with the name ${route.name}, chose another name, please`);

        this._routes[route.name] = route;

        return this;
    }

    /**
     * Get route
     * @param name {string}
     * @param params {Object}
     * @param getLikeObject {boolean}
     * @returns {string}
     */
    getRoute(name, params= {}, getLikeObject = false){
        if(getLikeObject)
            return this._routes[name];

        if(!this._routes[name]?.getRouteWithParams(params))
            throw new Error(`Route ${name} not found `);

        return this._routes[name]?.getRouteWithParams(params);
    }

    getCurrentRoute(){
        const path = history.location.pathname;

        return this.getRouteNameFromUrl(path);
    }

    getRouteNameFromUrl(urlString){
        let maxLength = 0;

        let longestRoute = "";

        Object.keys(this._routes)
            .filter(routeName => {
                if(maxLength < this._routes[routeName].path.length && this._routes[routeName].isRouteEqualTo(urlString)){
                    maxLength = this._routes[routeName].path.length;

                    longestRoute = routeName;

                    return true;
                }

                return false;
            });

        return longestRoute === "" ? null : longestRoute;
    }
}
