import * as express from "express";

const router = express.Router()

export const homeController = router.get("/", (_req, res) => {
    res.json({ msg: "Hello, from GitHub Actions!" })
})