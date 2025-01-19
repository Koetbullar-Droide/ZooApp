export class ReservationsService {
    reservations = [];

    public saveArray(array: Reservation): void {
        this.reservations.push(array)
    }

    public getArray(): [] {
        return this.reservations;
    }
}

export interface Reservation {
    date: string;
    startTime: string;
    endTime: string;
}