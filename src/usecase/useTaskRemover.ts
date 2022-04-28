import { useMutation, useQueryClient } from 'react-query';

import type { TaskModel } from '../models/TaskModel';
import { useTaskRepository } from '../repositories/RepositoryProvider';
import { taskKeys } from './queries/tasks';

export const useTaskRemover = (id: number) => {
  const taskRepository = useTaskRepository();
  const queryClient = useQueryClient();

  return useMutation(taskKeys.detail(id), taskRepository.deleteTask, {
    onMutate: async () => {
      await queryClient.cancelQueries(taskKeys.list());
      queryClient.setQueryData<TaskModel[]>(
        taskKeys.list(),
        (tasks) => tasks?.filter((task) => task.id !== id) ?? [],
      );
    },
    onSettled: async () => {
      queryClient.invalidateQueries(taskKeys.all());
    },
    retry: 5,
  });
};
