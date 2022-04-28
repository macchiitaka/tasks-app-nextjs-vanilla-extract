import constate from 'constate';

import type { TaskRepository } from './TaskRepository';

export const [RepositoryProvider, useTaskRepository] = constate(
  (props: { taskRepository: TaskRepository }) => props,
  (props) => props.taskRepository,
);
