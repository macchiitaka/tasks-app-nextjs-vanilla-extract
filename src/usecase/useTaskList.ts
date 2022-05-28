import { useQuery } from 'react-query';

import { taskKeys } from '../store/queries/tasks';
import { useTaskRepository } from '../store/RepositoryProvider';

export const useTaskList = () => {
  const taskRepository = useTaskRepository();
  return useQuery(taskKeys.list(), taskRepository.getTaskList);
};
