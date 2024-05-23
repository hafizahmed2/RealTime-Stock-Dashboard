import express, { Request, Response, Router } from "express";

// Create a new router instance
const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the homepage");
});

// Define routes
router.post("/", (req: Request, res: Response) => {
  res.send("Welcome to the homepage");
});

// Export the router to make it available to other parts of the application
export default router;
