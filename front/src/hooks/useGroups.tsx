import { getGroups } from '@/pages/api/groups';
import React, { useState , useEffect } from "react";
import { Groups } from '@/types/groups';

export const usePlaces = () => {
    const [ groups, setGroups ] = useState<Groups[]>([]);
    const fetchGroups = async () => {
        const groups = await getGroups();
        setGroups(groups);
    }

    useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    return groups;
};
