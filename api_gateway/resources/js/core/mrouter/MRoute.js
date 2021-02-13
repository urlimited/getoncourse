export class MRoute {
    constructor(data) {
        this.fullPath = data?.fullPath ?? "";
        this.selfPath = data?.selfPath ?? "";
        this.name = data?.name ?? "";
        this.regularExp = data?.regularExp ?? "";
    }
}