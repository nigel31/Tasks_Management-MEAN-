import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../Model/TaskDetails';
import { TaskServiceService } from '../Service/task-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  public taskList?: any;

  constructor(private route: ActivatedRoute, public taskService: TaskServiceService, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    const _id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(_id);

    const allStoredUsers = this.getAllTask();
    console.log(allStoredUsers)
  }

  getAllTask() {
    this.taskService.getData().subscribe((response) => {
      console.log('response is', response)
      this.taskList = response;
    }, (error) => {
      console.log('error is', error);
    })
  }

  submit(form: NgForm) {
    this.editTask(form);
    console.log(form);
  }

  resetForm(myForm: NgForm) {
    myForm.form.reset();
    this.taskService.taskData = new Task();
  }

  editTask(myForm: NgForm) {
    this.taskService.updateData().subscribe(d => {
      this.resetForm(myForm);
      console.log("Updated Successfully");
    });
  }
}
