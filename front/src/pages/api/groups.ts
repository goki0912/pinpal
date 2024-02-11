import { GroupsMember } from '@/types/groupsMember';

// groupの一覧を取得する
export const getGroups = async () => {
    try {
        const response = await fetch(
            'http://localhost:80/api/groups', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const Groups = await response.json();
        return Groups;
    }catch(e){
        console.error(e);
    }
}

// 特定のidのgroupを取得する
export const getGroupById = async (groupId: number) => {
    try {
        const response = await fetch(
            `http://localhost:80/api/groups/${groupId}`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const groupById = await response.json();
        return groupById;
    }catch(e){
        console.error(e);
    }
}

// groupを作成する
export const createGroup = async (group : GroupsMember) => {
    const token = sessionStorage.getItem('access_token');

    try {
        const response = await fetch(
            'http://localhost:80/api/groups', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}', 
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(group),
            }
        );
        const createdGroup = await response.json();
        return createdGroup;
    }catch(e){
        console.error(e);
    }
}

// groupのメールアドレスを取得する
export const getGroupEmail = async (groupId: number) => {
    try {
        const response = await fetch(
            `http://localhost:80/api/groups/${groupId}/email`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const groupEmail = await response.json();
        return groupEmail;
    }catch(e){
        console.error(e);
    }
}