export class MRoute {
    /**
     * @param name {string}
     * @param path {string}
     * @param params {Object}
     */
    constructor({name, path, params = {}}) {
        this.path = path ?? "";
        this.name = name ?? "";
        this.params = params ?? {};
    }

    /**
     * Returns path with params inserted instead of masks
     * @param params {Object}
     * @returns {string}
     */
    getRouteWithParams(params){
        let pathProcessed = this.path;
        Object.keys(params)
            .forEach(pk => {
                pathProcessed = pathProcessed.replace(`:${pk}`, params[pk]);
            });

        return pathProcessed;
    }
}
