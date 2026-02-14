import { Hono } from "hono";
import { getAllUsers } from "../controllers/example.controller";
import SchoolController from "../controllers/school.controller";

const api = new Hono()

api.get("/users", getAllUsers)

export default api;
