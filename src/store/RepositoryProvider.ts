import constate from 'constate';
import { useMemo } from 'react';

import { TaskRepository } from '../repositories/TaskRepository';
import { useAxios } from './AxiosProvider';

export const [RepositoryProvider, useTaskRepository] = constate(
  () => {
    const axios = useAxios();
    return useMemo(
      () => ({ taskRepository: new TaskRepository(axios) }),
      [axios],
    );
  },
  ({ taskRepository }) => taskRepository,
);
