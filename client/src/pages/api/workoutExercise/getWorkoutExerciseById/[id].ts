import { NextApiRequest, NextApiResponse } from "next";

export default async function getWorkoutExerciseById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;
      const response = await fetch(
        `http://localhost:3000/api/workoutExercise/getWorkoutExerciseById/${id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const body = await response.json();
        return res.status(200).json(body);
      }
      return res.status(502);
    }
  } catch (err) {
    console.error(err);
    return res.status(401);
  }
}
