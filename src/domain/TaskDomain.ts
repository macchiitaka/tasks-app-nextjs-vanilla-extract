export interface TaskInterface {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  done: boolean;
}

export interface TaskRepositoryInterface {
  getTaskList(): Promise<TaskInterface[]>;
  createTask(params: Pick<TaskInterface, 'title'>): Promise<TaskInterface>;
  updateTask(
    params: Pick<TaskInterface, 'id' | 'title' | 'done'>,
  ): Promise<TaskInterface>;
  deleteTask(id: TaskInterface['id']): Promise<void>;
}
