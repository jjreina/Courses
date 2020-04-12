import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Course } from '../model/course';
import { map, first, take } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { convertSnaps } from './db-utils';
import { Lesson } from '../model/lesson';
import { OrderByDirection } from '@firebase/firestore-types';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFirestore) { }

  result: Observable<Lesson[]>;

  loadAllCourses(): Observable<Course[]> {
    return this.db.collection('courses', query => query.orderBy('seqNo'))
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Course>(snaps)), first());
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.db.collection('courses', query => query.where('url', '==', courseUrl))
      .snapshotChanges()
      .pipe(
        map(snaps => {
          const courses = convertSnaps<Course>(snaps);

          return courses.length === 1 ? courses[0] : undefined;
        }), first()
      );
  }

  findLessons(courseId: string, sortOrder: OrderByDirection = 'asc',
              pagNumer: number = 0, pageSize: number = 3): Observable<Lesson[]> {

    this.result = this.db.collection(`courses/${courseId}/lessons`,
      query => query.orderBy('seqNo', sortOrder)
                    .limit(pageSize)
                    .startAfter(pagNumer * pageSize))
                    .snapshotChanges()
                    .pipe(
                      map(snaps => convertSnaps<Lesson>(snaps)),
                      first()
                    );

    this.result.forEach(value => {
      console.log(value);
    });
    return this.result;
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return from(this.db.doc(`courses/${courseId}`).update(changes));
  }
}
