import type { AxiosInstance } from 'axios';

import type { TaskModel } from '../models/TaskModel';

type TaskRecord = {
  id: number;
  created_at: string; // RFC3339
  updated_at: string; // RFC3339
  title: string;
  done: boolean;
};

const convertToModel = ({
  created_at,
  updated_at,
  ...rest
}: TaskRecord): TaskModel => ({
  ...rest,
  createdAt: created_at,
  updatedAt: updated_at,
});

export class TaskRepository {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public readonly getAllTasks = async (): Promise<TaskModel[]> =>
    (await this.api.get<{ items: TaskRecord[] }>('/tasks')).data.items.map(
      convertToModel,
    );

  public readonly createTask = async (data: {
    title: string;
  }): Promise<TaskModel> =>
    convertToModel((await this.api.post<TaskRecord>('/tasks', data)).data);

  public readonly updateTask = async ({
    id,
    ...data
  }: {
    id: number;
    title: string;
    done: boolean;
  }): Promise<TaskModel> =>
    convertToModel((await this.api.put<TaskRecord>(`/tasks/${id}`, data)).data);

  public readonly deleteTask = async (id: number): Promise<void> => {
    await this.api.delete<void>(`/tasks/${id}`);
  };
}
