
async function  fetchUserDetails(currentUserId) {
    try {
        const response = await fetch(`https://dummyjson.com/users/${currentUserId}`)
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}


export default async function UserDetails({params}){
    console.log(params);
    const userDetails = await fetchUserDetails(params.details);
    return (
        <div>
            <h1>This is user details page</h1>
            <p>{userDetails.firstName} {userDetails.lastName}</p>
            <p>{userDetails.age} </p>
            <p>{userDetails.email}</p>
            <p>{userDetails.phone}</p>
        </div>
    )
}