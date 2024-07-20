import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuizService} from '../../../../shared/services/quiz.service';
import {debounceTime} from 'rxjs/operators';
import {status} from '../../../../shared/models/status';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  quizzes;
  filteredQuizzes;
  constructor( private QS: QuizService) { }
  ngOnInit(): void {
    this.QS.getAllQuizzes()
        .subscribe((res: any[]) => {
          this.quizzes=[...res];
          this.filteredQuizzes = res;
        });
    this.searchControl.valueChanges
        .pipe(debounceTime(200))
        .subscribe(value => {
          this.filerData(value);
        });
  }
  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return this.filteredQuizzes = [...this.quizzes];
    }

    const columns = Object.keys(this.quizzes[0]);
    if (!columns.length) {
      return;
    }

    const rows = this.quizzes.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.filteredQuizzes = rows;
  }
  getStatusIcon(quizStatus: status): string {
    switch (quizStatus) {
      case status.DONE:
        return 'fa-check-circle';
      case status.IN_PROGRESS:
        return 'fa-spinner';
      case status.NOT_SUBMITTED:
        return 'fa-times-circle';
      case status.PASSED:
        return 'fa-check';
      case status.COMPLETED:
        return 'fa-flag-checkered';
      case status.FAILED:
        return 'fa-exclamation-circle';
      case status.PENDING:
        return 'fa-hourglass-half';
      default:
        return '';
    }
  }

  getStatusClass(quizStatus: status): string {
    switch (quizStatus) {
      case status.DONE:
        return 'text-success';
      case status.IN_PROGRESS:
        return 'text-info';
      case status.NOT_SUBMITTED:
        return 'text-danger';
      case status.PASSED:
        return 'text-success';
      case status.COMPLETED:
        return 'text-primary';
      case status.FAILED:
        return 'text-danger';
      case status.PENDING:
        return 'text-warning';
      default:
        return '';
    }
  }

}
