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