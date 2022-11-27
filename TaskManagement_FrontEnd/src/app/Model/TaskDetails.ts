import { Time } from "@angular/common";

export class Task {
    TaskID: number = 0;
    TaskName: string = '';
    TaskType: string = '';
    StartTime?: Time;
    Amount?: number;
    CompleteDate?: Date;
    TaskNote: string = '';
}