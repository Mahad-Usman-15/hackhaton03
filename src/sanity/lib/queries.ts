import { defineQuery } from "next-sanity";


    export const allProuducts = defineQuery(`
        *[_type == "products"]{
        _id,
        name,
        price,
        description,
        "imageUrl" :image.asset->url
        }`)