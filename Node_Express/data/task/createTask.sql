INSERT INTO [dbo].[Task]
    (
        [TaskName],
        [TaskType],
        [StartTime],
        [Amount],
        [CompleteDate],
        [TaskNote]
    )
VALUES 
    (
        @TaskName,
        @TaskType,
        @StartTime,
        @Amount,
        @CompleteDate,
        @TaskNote
    )

SELECT SCOPE_IDENTITY() AS TaskID