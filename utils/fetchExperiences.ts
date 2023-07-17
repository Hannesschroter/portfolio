import { Experience } from '../typings';

// export const fetchExperiences = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

//     const data = await res.json();
//     const experiences: Experience[] = data.experiences;

//     // console.log("fetching", experiences);

//     return experiences;
// }

import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
*[_type == 'experience']{
  ...,
  technologies[]->
}
`;

export const fetchExperiences = async () => {
    const experiences = await sanityClient.fetch(query);

    // const data = await res.json();
    // const experiences: Experience[] = data.experiences;

    // console.log("fetching", experiences);

    return experiences;
}