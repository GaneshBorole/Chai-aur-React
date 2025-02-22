import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData ();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ganeshborole')
    //     .then(res=>res.json())
    //     .then(data=>
    //         {console.log(data);
    //             setData(data);
                 
    //           })  
    // }, [])
  return (
    <div className='text-center bg-gray-600 m-4 p-4 text-3xl'>Github Followers:{data.followers}
    <img  src={data.avatar_url} alt="Git picture" className='rounded-full w-32 h-32 mx-auto'/>
      
    </div>
  )
}

export default Github;

export async function githubInfoLoader() {
  const response = await fetch('https://api.github.com/users/ganeshborole');
  return response.json();
}