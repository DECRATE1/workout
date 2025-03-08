import { NextApiRequest, NextApiResponse } from "next";

export default async function SignUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  try {
    const response = await fetch("http://localhost:3000/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    if (response) {
      res.status(200).send("Succesfuly");
      return;
    }
    res.status(404).send("BitBox");
    return;
  } catch (err) {
    res.status(401).send(err);
    return;
  }
}
