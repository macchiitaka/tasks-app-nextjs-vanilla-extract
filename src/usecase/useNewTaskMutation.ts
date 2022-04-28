import { useMutation, useQueryClient } from 'react-query';

import type { TaskModel } from '../models/TaskModel';
import { useTaskRepository } from '../repositories/RepositoryProvider';
import { taskKeys } from './queries/tasks';

export const useNewTaskMutation = () => {
  const taskRepository = useTaskRepository();
  const queryClient = useQueryClient();

  return useMutation(taskRepository.createTask, {
    onMutate: async ({ title }: { title: string }) => {
      await queryClient.cancelQueries(taskKeys.list());
      queryClient.setQueryData<TaskModel[]>(taskKeys.list(), (old) => [
        {
          id: Math.random(),
          title,
          done: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        ...(old ?? []),
      ]);
    },
    onSettled: async () => {
      queryClient.invalidateQueries(taskKeys.list());
    },
    retry: 5,
  });
};
