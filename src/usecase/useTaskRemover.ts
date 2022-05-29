import { useMutation, useQueryClient } from 'react-query';

import type { ITask } from '../domain/TaskDomain';
import { taskKeys } from '../store/queries/tasks';
import { useTaskRepository } from '../store/RepositoryProvider';

export const useTaskRemover = (id: number) => {
  const taskRepository = useTaskRepository();
  const queryClient = useQueryClient();

  return useMutation(taskKeys.detail(id), taskRepository.deleteTask, {
    onMutate: async () => {
      await queryClient.cancelQueries(taskKeys.list());
      queryClient.setQueryData<ITask[]>(
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
