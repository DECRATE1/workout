import { NextApiRequest, NextApiResponse } from "next";

export default async function SignUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("http://localhost:3000/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    if (response) {
      res.status(200).send(response.url);
      return;
    }
    res.status(404).send("Error");
    return;
  } catch (err) {
    res.status(401).send(err);
    return;
  }
}
