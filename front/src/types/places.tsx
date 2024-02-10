export type Places = {
    name: string;
    status: number;
    group_id: [
        {
            id: number;
            name: string;
            color: {
                r: number;
                g: number;
                b: number;
                a: number;
            };
        }
    ]
    latitude: number;
    longitude: number;
    date: Array<string>;
}
