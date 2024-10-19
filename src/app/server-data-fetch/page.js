
// next js use fetch api to fetch data 
// so first of all make async components  

async function fetchListOfUsers() {
    try {
        // to prevent caching we can use no-store 
        // const apiResponse = await fetch('https://dummyjson.com/users',
        //     {cache: 'no-store'}
        // );
        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();
        return result.users;
    } catch (error) {
        console.log(error);
    }
}

export default async function ServerDataFetching(){
    const listOfUsers = await fetchListOfUsers();
    console.log(listOfUsers);
    return (
        <>
            <h1>Server side data fetching</h1>
            <ul>
              {
                  listOfUsers && listOfUsers.length > 0 ? listOfUsers.map(user => <li>{user.firstName}</li>) : null
              }

            </ul>
        </>
    )
}