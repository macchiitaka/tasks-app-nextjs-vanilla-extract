import { useMutation, useQueryClient } from 'react-query';

import type { TaskInterface } from '../domain/TaskDomain';
import { taskKeys } from '../store/queries/tasks';
import { useTaskRepository } from '../store/RepositoryProvider';

export const useNewTaskMutation = () => {
  const taskRepository = useTaskRepository();
  const queryClient = useQueryClient();

  return useMutation(taskRepository.createTask.bind(taskRepository), {
    onMutate: async ({ title }: { title: string }) => {
      await queryClient.cancelQueries(taskKeys.list());
      queryClient.setQueryData<TaskInterface[]>(taskKeys.list(), (old) => [
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
      queryClient.invalidateQueries(taskKeys.all());
    },
    retry: 5,
  });
};
