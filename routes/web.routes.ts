import { Hono } from "hono";
import SchoolController from "../controllers/school.controller";

const web = new Hono()
const schoolController = new SchoolController()

web.get('/schools', schoolController.getListData)
web.get('/school/:id', schoolController.getDetailData)

web.get('/scola/:id', schoolController.getDetailData)
web.get('/scolas/:id', schoolController.getDetailData)
export default web