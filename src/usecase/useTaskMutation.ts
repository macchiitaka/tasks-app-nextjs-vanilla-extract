import { useMutation, useQueryClient } from 'react-query';

import type { Task } from '../domain/TaskDomain';
import { taskKeys } from '../store/queries/tasks';
import { useTaskRepository } from '../store/RepositoryProvider';

export const useTaskMutation = (id: number) => {
  const taskRepository = useTaskRepository();
  const queryClient = useQueryClient();

  return useMutation(taskKeys.detail(id), taskRepository.updateTask, {
    onMutate: async ({ done }) => {
      await queryClient.cancelQueries(taskKeys.list());
      queryClient.setQueryData<Task[]>(
        taskKeys.list(),
        (tasks) =>
          tasks?.map((task) =>
            task.id === id
              ? {
                  ...task,
                  done,
                }
              : task,
          ) ?? [],
      );
    },
    onSettled: async (result) => {
      queryClient.invalidateQueries(taskKeys.all());
    },
    retry: 5,
  });
};
