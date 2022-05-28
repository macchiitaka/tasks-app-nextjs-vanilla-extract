import { useQuery } from 'react-query';

import { useTaskRepository } from '../store/RepositoryProvider';
import { taskKeys } from './queries/tasks';

export const useTaskList = () => {
  const taskRepository = useTaskRepository();
  return useQuery(taskKeys.list(), taskRepository.getTasks);
};
