export default interface IpGeolocation {
    ip: string,
    status: IPGeoStatus,
    errorMessage?: string
    location: string,
    timezone: Date,
    isp: string,
    coord: {
        lat: number,
        lon: number
    }
}