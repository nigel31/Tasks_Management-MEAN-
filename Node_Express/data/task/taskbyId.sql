SELECT [TaskID]
      ,[TaskName]
      ,[TaskType]
      ,[StartTime]
      ,[Amount]
      ,[CompleteDate]
      ,[TaskNote]
FROM [dbo].[Task]
WHERE [TaskID]=@TaskID