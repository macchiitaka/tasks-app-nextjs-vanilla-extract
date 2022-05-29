import constate from 'constate';
import { useMemo } from 'react';

import type { TaskRepositoryInterface } from '../domain/TaskDomain';
import { TaskRepository } from '../repositories/TaskRepository';
import { useAxios } from './AxiosProvider';

export const [RepositoryProvider, useTaskRepository] = constate(
  (): { taskRepository: TaskRepositoryInterface } => {
    const axios = useAxios();
    return useMemo(
      () => ({
        taskRepository: new TaskRepository(axios),
      }),
      [axios],
    );
  },
  ({ taskRepository }): TaskRepositoryInterface => taskRepository,
);
