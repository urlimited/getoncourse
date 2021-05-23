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

    /**
     * Compares routes despite of params
     * @param stringUrl {string}
     */
    isRouteEqualTo(stringUrl){
        let regex = this.path;

        regex = regex.replace(new RegExp("(:[^/]*)(\/)","gm"), "[^\\/]*\/");

        regex = regex.replaceAll("/", "\\/");

        const processedStringUrl = stringUrl + "/";

        return processedStringUrl.match(regex) !== null;
    }
}
