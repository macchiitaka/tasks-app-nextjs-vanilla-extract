import { useQuery } from 'react-query';

import { useTaskRepository } from '../repositories/RepositoryProvider';
import { taskKeys } from './queries/tasks';

export const useTaskList = () => {
  const taskRepository = useTaskRepository();
  return useQuery(taskKeys.list(), taskRepository.getAllTasks);
};
