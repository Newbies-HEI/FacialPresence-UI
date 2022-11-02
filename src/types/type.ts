export interface Course {
    id: string,
    ref:string,
    name: string,
    credits: number,
    total_hours: number
}

export interface Event {
    id: string,
    responsible: string,
    type: string,
    place: string,
    start_datetime: string,
    end_datetime: string
}
