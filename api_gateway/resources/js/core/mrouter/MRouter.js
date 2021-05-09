import {MRoute} from "./MRoute";

/**
 * Singleton router manage class
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
            this._instance = new this(params.basePath);

        return this._instance;
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
            return this._routes.find(r => r.name === name)

        if(!this._routes[name]?.getRouteWithParams(params))
            throw new Error(`Route ${name} not found `);

        return this._routes[name]?.getRouteWithParams(params);
    }
}
