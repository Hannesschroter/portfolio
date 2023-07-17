// import { Skill } from '../typings';

// export const fetchSkills = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

//     const data = await res.json();
//     const skills: Skill[] = data.skills;

//     // console.log("fetching", skills);

//     return skills;
// }




import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Skill } from "../typings";



const query = groq`*[_type == 'skill']`;

type Data = {
    skills: Skill[];
};

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
//   ) {
//     const projects: Project[] = await sanityClient.fetch(query); 
//     res.status(200).json({ projects })
//   }

  export const fetchSkills = async () => {
    const skills = await sanityClient.fetch(query);

    // const data = await res.json();
    // const projects: Project[] = data.projects;

    // console.log("fetching", projects);

    return skills;
}