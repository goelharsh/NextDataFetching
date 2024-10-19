'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

// use effect 
// ShadowRoot, useSwr hook
// with loading state 

export default function ClientDataFetching(){
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function  fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const result = await response.json();
            if(result?.users){
                setUsers(result.users);
                setLoading(false);
            }   
        } catch (error) {
            setUsers([]);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchListOfUsers();
    },[])
    if(loading){
        return <h1 className="text-3xl font-bold">Loading users, pls wait...</h1>
    }
    return (
        <>
            <h1>Client side data fetching</h1>
            <ul>
              {
                  users && users.length > 0 ? users.map(user => <li>
                    <Link href={`server-data-fetch/${user.id}`}>{user.firstName}</Link>
                  </li>) : null
              }

            </ul>
        </>
    )
}