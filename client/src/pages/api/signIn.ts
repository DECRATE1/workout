import { NextApiRequest, NextApiResponse } from "next";

export default async function SignIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("http://localhost:3000/api/auth/SignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    if (response) {
      const body = await response.json();
      res.json({ token: body.access_token });
      return;
    }
    res.status(404).send("Error");
    return;
  } catch (err) {
    res.status(401).send(err);
    return;
  }
}
