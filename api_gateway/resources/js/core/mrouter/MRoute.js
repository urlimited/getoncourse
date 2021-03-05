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
     * @returns {string}
     */
    getRouteWithParams(){
        let pathProcessed = this.path;
        Object.keys(this.params)
            .forEach(pk => {
                pathProcessed = pathProcessed.replace(`:${pk}`, this.params[pk]);
            });

        return pathProcessed;
    }
}
