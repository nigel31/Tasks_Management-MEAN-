import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskServiceService } from '../Service/task-service.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Task } from '../Model/TaskDetails';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  public taskList?: any;
  constructor(private taskService: TaskServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllTask();

  }
  getAllTask() {
    this.taskService.getData().subscribe((response) => {
      console.log('response is', response)
      this.taskList = response;
    }, (error) => {
      console.log('error is', error);
    })
  }

}
