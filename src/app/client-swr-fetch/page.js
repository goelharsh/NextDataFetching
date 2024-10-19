'use client'
import Link from "next/link";
import useSWR from "swr";
const fetcher = (...args)=> fetch(...args).then(res => res.json());

export default function ClientDataFetching(){
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)
    if(error){
         return <h1 className="text-3xl font-bold">Error while fetching users</h1>
    }
    if(isLoading){
        return <h1 className="text-3xl font-bold">Loading users, pls wait...</h1>
    }
    return (
        <>
            <h1>Client side data fetching</h1>
            <ul>
              {
                  data && data?.users && data.users.length > 0 ? data.users.map(user => <li>
                    <Link href={`server-data-fetch/${user.id}`}>{user.firstName}</Link>
                  </li>) : null
              }

            </ul>
        </>
    )
}