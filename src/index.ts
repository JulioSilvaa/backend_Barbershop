import { NextFunction, Request, Response } from "express";

import app from "./config/server";
import UserRouter from "./Router/UserRouter";

const port = process.env.PORT || 3000;

app.use("/api", UserRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => console.log("listening on port: " + port));
