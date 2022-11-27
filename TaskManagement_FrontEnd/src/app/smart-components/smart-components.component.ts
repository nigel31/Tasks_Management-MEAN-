import { Component, OnInit } from '@angular/core';
import { Task } from '../Model/TaskDetails';
import { TaskServiceService } from '../Service/task-service.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-smart-components',
  templateUrl: './smart-components.component.html',
  styleUrls: ['./smart-components.component.scss']
})
export class SmartComponentsComponent implements OnInit {
  //taskList: Task[] = [];
  public taskList?: any;
  taskDetail: any = FormGroup;
  constructor(public taskService: TaskServiceService,private http: HttpClient,private fb : FormBuilder) { }


  ngOnInit(): void {
    this.getAllTask();
  }
  getAllTask(){
    this.taskService.getData().subscribe((response)=>{
      console.log('response is',response)
      this.taskList = response;
    }, (error) =>{
      console.log('error is',error);
    })
  }

  // addTask() {
  //   console.log(this.taskDetail);
  //   this.taskOnj.TaskID = this.taskDetail.value.TaskID;
  //   this.taskOnj.TaskName = this.taskDetail.value.TaskName;
  //   this.taskOnj.TaskType = this.taskDetail.value.TaskType;
  //   this.taskOnj.StartTime = this.taskDetail.value.StartTime;
  //   this.taskOnj.Amount = this.taskDetail.value.Amount;
  //   this.taskOnj.CompleteDate = this.taskDetail.value.CompleteDate;
  //   this.taskOnj.TaskNote = this.taskDetail.value.TaskNote;

  //   this.taskService.addData(this.taskOnj).subscribe(res=>{
  //       console.log(res);
  //       this.getAllTask();
  //   },err=>{
  //       console.log(err);
  //   });

  // }
  submit(form: NgForm) {
      this.insertTask(form);
      console.log(form);
  }

  insertTask(myForm: NgForm) {
    this.taskService.addData().subscribe(d => {
      this.resetForm(myForm);
      console.log("Saved Successfully");
    });
  }

  resetForm(myForm: NgForm) {
    myForm.form.reset();
    this.taskService.taskData = new Task();
  }
  


}
