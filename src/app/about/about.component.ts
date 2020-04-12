import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../model/course';
import { of } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    const courseRef = this.db.doc('/courses/piFEcumfBMbSTGYrDL8B')
      .snapshotChanges()
      .subscribe(snap => {
        const course: any = snap.payload.data();
        console.log('course.relatedCourseRef', course.releatedCourseRef);
      });
    const ref = this.db.doc('courses/45BH6CQFvJ6eQST3r0N0')
      .snapshotChanges()
      .subscribe(
        doc => console.log('ref', doc.payload.ref)
      );
  }

  save() {
    const firebaseCourseRef = this.db.doc('/courses/piFEcumfBMbSTGYrDL8B').ref;
    const rxjsCourseRef = this.db.doc('/courses/Qu5fNuxmRXwlnNyY6OPW').ref;
    const batch = this.db.firestore.batch();
    batch.update(firebaseCourseRef, {titles: {description: 'Firebase Course'}});
    batch.update(rxjsCourseRef, {titles: {description: 'RxJS Course'}});
    const batch$ = of(batch.commit());
    batch$.subscribe();
  }

  async runTransaction() {
    const newCounter = await this.db.firestore.runTransaction(async transaction => {
      console.log('Running transition...');
      const courseRef = this.db.doc('/courses/piFEcumfBMbSTGYrDL8B').ref;
      const snap = await transaction.get(courseRef);
      const course = <Course> snap.data();
      const lessonsCount = course.lessonsCount - 1;
      transaction.update(courseRef, {lessonsCount});
      return lessonsCount;
    });

    console.log('result lesson count = ', newCounter);
  }


}
