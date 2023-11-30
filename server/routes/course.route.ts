import express from "express";
import { addAnwser, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth"; 
const courseRouter = express.Router();
courseRouter.post(

"/create-course",
isAutheticated,
authorizeRoles("admin"),
uploadCourse
);

courseRouter.put(

    "/edit-course/:id",
    isAutheticated,
    authorizeRoles("admin"),
    editCourse
    );

    courseRouter.get(

        "/get-course/:id",
        getSingleCourse
        );

        courseRouter.get(

            "/get-courses",
            getAllCourses
            );

 courseRouter.get(

     "/get-course-content/:id",
     isAutheticated,
     getCourseByUser
     );

     courseRouter.put(

        "/add-question",
        isAutheticated,
        addQuestion
        );
     courseRouter.put(

            "/add-answer",
            isAutheticated,
            addAnwser
            );

            courseRouter.put(

                "/add-review/:id",
                isAutheticated,
                addReview
                );

                courseRouter.put(

                    "/add-reply",
                    isAutheticated,
                    authorizeRoles("admin"),
                    addReplyToReview
                    );
                    courseRouter.put(

                        "/get-courses",
                        isAutheticated,
                        authorizeRoles("admin"),
                        getAllCourses
                        );
             courseRouter.delete(
                 "/delete-course/:id",
                isAutheticated,
                authorizeRoles("admin"),
                 deleteCourse
                 );
    


export default courseRouter;
