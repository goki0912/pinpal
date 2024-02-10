import { getGroupById } from '@/pages/api/groups';
import React, { useState , useEffect } from "react";
import { Groups } from '@/types/groups';   

export const useGroupById = (id: number) => {
    const [ groups, setGroupsById ] = useState<Groups[]>([]);
    const fetchGroup = async () => {
        const groups = await getGroupById(id);
        setGroupsById (groups);
    }

    useEffect(() => {
        fetchGroup();
    }, [fetchGroup]);

    return groups;
};