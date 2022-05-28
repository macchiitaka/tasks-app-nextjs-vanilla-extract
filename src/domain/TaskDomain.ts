export type Task = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  done: boolean;
};

export interface TaskRepositoryInterface {
  getTaskList(): Promise<Task[]>;
  createTask(params: Pick<Task, 'title'>): Promise<Task>;
  updateTask(params: Pick<Task, 'id' | 'title' | 'done'>): Promise<Task>;
  deleteTask(id: Task['id']): Promise<void>;
}
