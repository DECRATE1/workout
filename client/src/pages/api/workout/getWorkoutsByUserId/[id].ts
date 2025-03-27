import { NextApiRequest, NextApiResponse } from "next";

export default async function Workout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const authorId = req.query;
    try {
      const response = await fetch(
        `http://localhost:3000/api/workout/getWorkoutsByUserId/${authorId}`,
        {
          method: "GET",
        }
      );
    } catch (err) {
      console.error(err);
    }
  }
}
