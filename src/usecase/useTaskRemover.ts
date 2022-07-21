import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { TaskInterface } from '../domain/TaskDomain';
import { taskKeys } from '../store/queries/tasks';
import { useTaskRepository } from '../store/RepositoryProvider';

export const useTaskRemover = (id: number) => {
  const taskRepository = useTaskRepository();
  const queryClient = useQueryClient();

  return useMutation(taskKeys.detail(id), taskRepository.deleteTask, {
    onMutate: async () => {
      await queryClient.cancelQueries(taskKeys.list());
      queryClient.setQueryData<TaskInterface[]>(
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
