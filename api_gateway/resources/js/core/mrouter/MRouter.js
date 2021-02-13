export class MRouter {
    _routes = [];
    _basePath = "";

    constructor(data) {
        this._basePath = data?.basePath ?? ""
    }

    initRoutes(routes) {
        this._routes = routes;
    }

    getRouteByName(routeName) {
        return this._routes.find(r => r.name === routeName);
    }

    getRouteByPath(routePath) {
        return this._routes.find()
    }
}