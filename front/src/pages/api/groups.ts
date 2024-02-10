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