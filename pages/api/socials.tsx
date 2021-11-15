import { NextApiRequest, NextApiResponse } from "next";
import { socials } from "./data/socials";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  if (req.method === "GET") {
    res.status(200).json(socials);
  }
}
