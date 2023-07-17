// import { PageInfo } from '../typings';


// export const fetchPageInfo = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

//     const data = await res.json();
//     const pageInfo: PageInfo = data.pageInfo;

//     // console.log("fetching", pageInfo);

//     return pageInfo;
// }

import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

const query = groq`*[_type == 'pageInfo'][0]`;

type Data = {
    pageInfo: PageInfo;
};

export const fetchPageInfo = async () => {
    const res = await sanityClient.fetch(query); 

    // console.log("fetching", res);

    // const data = await res.json();
    // const pageInfo: PageInfo = data.pageInfo;

    // console.log("fetching", pageInfo);

    return res;
}

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
//   ) {
//     const pageInfo: PageInfo = await sanityClient.fetch(query); 
//     res.status(200).json({ pageInfo })
//   }
  