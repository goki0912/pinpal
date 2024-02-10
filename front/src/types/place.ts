import { Group } from './group';

export type Place = {
    id: number;
    name: string;
    status: number;
    group_id: Group[];
    latitude: number;
    longitude: number;
    date: string[];
};