import { NextApiRequest, NextApiResponse } from "next";

export default async function CreateWorkout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("http://localhost:3000/api/workout/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    if (response) {
      const body = await response.json();
      res.status(200).json({ body });
    }
  } catch (err) {
    res.status(502).json(err);
  }
}
