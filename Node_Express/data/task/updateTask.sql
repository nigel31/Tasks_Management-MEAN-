UPDATE [dbo].[Task]
SET [TaskType]=@TaskType,
    [TaskType]=@TaskType,
    [StartTime]=@StartTime,
    [Amount]=@Amount,
    [CompleteDate]=@CompleteDate,
    [TaskNote]=@TaskNote
WHERE [TaskID]=@TaskID

SELECT [TaskID]
      ,[TaskName]
      ,[TaskType]
      ,[StartTime]
      ,[Amount]
      ,[CompleteDate]
      ,[TaskNote]
  FROM [dbo].[Task]
  WHERE [TaskID]=@TaskID