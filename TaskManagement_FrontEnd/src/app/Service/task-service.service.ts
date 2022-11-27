import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Model/TaskDetails';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  url = 'http://localhost:8080/api/tasks';
  posturl = 'http://localhost:8080/api/task';
  updateurl = 'http://localhost:8080/api/task'
  constructor(private http: HttpClient) { }

  taskData: Task = new Task()

  getData() {
    return this.http.get(this.url);
  }

  addData() {
    return this.http.post
      (this.posturl, this.taskData);
  }

  updateData() {
    return this.http.put(`${this.updateurl}/${this.taskData.TaskID}`, this.taskData);
  }
}

