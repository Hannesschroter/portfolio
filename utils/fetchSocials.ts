// import { Social } from '../typings';

// export const fetchSocials = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`);

//     const data = await res.json();
//     const socials: Social[] = data.socials;

//     console.log("fetching", socials);

//     return socials;
// }


import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Social } from "../typings";




const query = groq`*[_type == 'social']`;

type Data = {
    socials: Social[];
};


  export const fetchSocials = async () => {
    const socials = await sanityClient.fetch(query);

    return socials;
}