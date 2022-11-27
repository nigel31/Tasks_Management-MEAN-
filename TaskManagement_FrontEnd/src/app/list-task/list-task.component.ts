import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../Service/task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
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
