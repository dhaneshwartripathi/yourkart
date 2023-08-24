import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { categoryController, createCategoryController,deleteCategoryController,singleCategoryController,updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//routes

//create category route
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get all catagories

router.get('/get-category',categoryController)

export default router;

//get single category

router.get('/single-category/:slug',singleCategoryController)

//delete category

router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)
