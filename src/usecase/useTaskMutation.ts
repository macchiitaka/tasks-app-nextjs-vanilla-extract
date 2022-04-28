import { useMutation, useQueryClient } from 'react-query';

import type { TaskModel } from '../models/TaskModel';
import { useTaskRepository } from '../repositories/RepositoryProvider';
import { taskKeys } from './queries/tasks';

export const useTaskMutation = (id: number) => {
  const taskRepository = useTaskRepository();
  const queryClient = useQueryClient();

  return useMutation(taskKeys.detail(id), taskRepository.updateTask, {
    onMutate: async ({ done }) => {
      await queryClient.cancelQueries(taskKeys.list());

      queryClient.setQueryData<TaskModel[]>(
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
      queryClient.invalidateQueries(taskKeys.list());
    },
    retry: 5,
  });
};
