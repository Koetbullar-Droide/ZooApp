export class ReservationsService {
    private static instance: ReservationsService;
    private reservations: Reservation[] = [];

    private constructor() {} // Prevent direct instantiation

    public static getInstance(): ReservationsService {
        if (!ReservationsService.instance) {
            ReservationsService.instance = new ReservationsService();
        }
        return ReservationsService.instance;
    }

    public saveReservation(reservation: Reservation): void {
        this.reservations.push(reservation);
    }

    public getArray(): Reservation[] {
        return this.reservations;
    }
}

export interface Reservation {
    date: string;
    startTime: string;
    endTime: string;
    firstname: string;
    lastname: string;
    location: string
}
