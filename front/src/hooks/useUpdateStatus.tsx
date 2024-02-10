import { updatePlaceStatus } from '@/pages/api/places';

export const useUpdateStatus = async (id: number, status_id: number) => {
    try {
        await updatePlaceStatus(id, status_id);
    } catch (error) {
        console.error(error);
    }
}