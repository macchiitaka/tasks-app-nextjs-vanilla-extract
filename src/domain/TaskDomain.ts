export interface ITask {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  done: boolean;
}

export interface TaskRepositoryInterface {
  getTaskList(): Promise<ITask[]>;
  createTask(params: Pick<ITask, 'title'>): Promise<ITask>;
  updateTask(params: Pick<ITask, 'id' | 'title' | 'done'>): Promise<ITask>;
  deleteTask(id: ITask['id']): Promise<void>;
}
