import type { AxiosInstance } from 'axios';

import type { Task, TaskRepositoryInterface } from '../domain/TaskDomain';

type TaskAPIResponse = {
  id: number;
  created_at: string; // RFC3339
  updated_at: string; // RFC3339
  title: string;
  done: boolean;
};

const createEntity = ({
  created_at,
  updated_at,
  ...rest
}: TaskAPIResponse): Task => ({
  ...rest,
  createdAt: created_at,
  updatedAt: updated_at,
});

export class TaskRepository implements TaskRepositoryInterface {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public readonly getTasks = async () =>
    (await this.api.get<{ items: TaskAPIResponse[] }>('/tasks')).data.items.map(
      createEntity,
    );

  public readonly createTask = async (data: { title: string }) =>
    createEntity((await this.api.post<TaskAPIResponse>('/tasks', data)).data);

  public readonly updateTask = async ({
    id,
    ...data
  }: Pick<Task, 'id' | 'title' | 'done'>) =>
    createEntity(
      (await this.api.put<TaskAPIResponse>(`/tasks/${id}`, data)).data,
    );

  public readonly deleteTask = async (id: number): Promise<void> => {
    await this.api.delete<void>(`/tasks/${id}`);
  };
}
