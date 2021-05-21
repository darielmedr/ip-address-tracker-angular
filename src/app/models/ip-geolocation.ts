export default interface IpGeolocation {
    ip: string,
    location: string,
    timezone: string,
    isp: string,
    coord: {
        lat: number,
        lon: number
    }
}