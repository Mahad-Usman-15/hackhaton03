import { createClient } from "next-sanity";


const client = createClient({
    projectId : "xamv0099" , 
    dataset : "production" ,
    useCdn : true , 
    apiVersion : "2025-02-06"
})

export default async function sanityFetch({query, params = {}}:{query : string , params?: any}){
    return await client.fetch(query,params)
}