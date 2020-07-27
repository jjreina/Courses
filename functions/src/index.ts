import * as functions from 'firebase-functions';
import {db} from './init';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({origin: true}));

app.get('/courses', async (request, response) => {
  const snaps = await db.collection('courses').get();
  const courses: any[] = [];

  snaps.forEach((snap: { data: () => any; }) => courses.push(snap.data()));

  response.status(200).json({courses});
});

export const getCourses = functions.https.onRequest(app);
export {onAddCourse} from './lessons-counter';

