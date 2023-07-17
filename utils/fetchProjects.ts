// import { Project } from '../typings';

// export const fetchProjects = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

//     const data = await res.json();
//     const projects: Project[] = data.projects;

//     // console.log("fetching", projects);

//     return projects;
// }


import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Project } from "../typings";


const query = groq`
*[_type == 'project']{
  ...,
  technologies[]->
}
`;

type Data = {
    projects: Project[];
};

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
//   ) {
//     const projects: Project[] = await sanityClient.fetch(query); 
//     res.status(200).json({ projects })
//   }

  export const fetchProjects = async () => {
    const projects = await sanityClient.fetch(query);

    // const data = await res.json();
    // const projects: Project[] = data.projects;

    // console.log("fetching", projects);

    return projects;
}