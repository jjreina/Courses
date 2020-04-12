import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { map } from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    beginnersCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit() {

      this.reloadCourses();
    }

    reloadCourses() {
      this.courses$ = this.coursesService.loadAllCourses();
      this.beginnersCourses$ = this.courses$.pipe(
        map(courses => courses.filter(course => course.categories.includes('BEGINNER'))));
      this.advancedCourses$ = this.courses$.pipe(
        map(courses => courses.filter(course => course.categories.includes('ADVANCED'))));
    }
}
