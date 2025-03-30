import { NextApiRequest, NextApiResponse } from "next";

export default async function createWorkoutExercise(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/workoutExercise/createWorkoutExercise",
      {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response) {
      const body = await response.json();
      return res.status(200).json(body);
    }
    return res.status(400).json("Error");
  } catch (err) {
    console.error(err);
  }
}
