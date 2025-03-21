import { NextApiRequest, NextApiResponse } from "next";

export default async function workoutExercise(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path = req.url?.split("/") as string[];
  try {
    if (req.method === "GET" && path[2] === "workoutExercise") {
      const { id } = req.query;

      const response = await fetch(
        `http://localhost:3000/api/workoutExercise/getWorkoutExerciseByUserId/${id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const body = await response.json();
        return res.json(body);
      }
      return res.status(502).json({ message: "Error accured" });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({ err });
  }
}
