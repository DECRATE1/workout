import { NextApiRequest, NextApiResponse } from "next";

export default async function Exercise(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/exercise/getExercises",
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const body = await response.json();
      return res.status(200).json(body);
    }
    return res.status(400).send("Error");
  } catch (err) {
    console.error(err);
  }
}
