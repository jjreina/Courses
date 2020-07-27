import * as functions from 'firebase-functions';
import { db } from './init';

export const onAddCourse = functions.firestore.document('courses/{courseId}/lessons/{lessonId}')
  .onCreate(async (snap, context) => {
    console.log("Running onAddLesson trigger...");
    return db.runTransaction(async transaction => { //no types defined
      const courseRef = snap.ref.parent.parent;
      const courseSnap = await transaction.get(courseRef);
      const course = courseSnap.data();
      const changes = {lessonsCount: course.lessonsCount + 1};
      transaction.update(courseRef, changes);
    });

  });
