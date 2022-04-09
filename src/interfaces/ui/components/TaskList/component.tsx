import { memo } from 'react';
import { useQuery } from 'react-query';

import type { TaskModel } from '../../../../domain/models/task-model';
import { fetchTasks, taskKeys } from '../../queries/tasks';
import { TaskItem } from '../TaskItem';
import * as classes from './style.css';

type ContainerProps = {};

type Props = {
  isLoading: boolean;
  isError: boolean;
  data: TaskModel[] | undefined;
} & ContainerProps;

const TaskItemMemoized = memo(TaskItem);

export const View: React.FC<Props> = (props) => (
  <>
    {(() => {
      if (props.isLoading) {
        return <p>Loading...</p>;
      }

      if (props.isError) {
        return <p>Error</p>;
      }

      return (
        <ul className={classes.ul}>
          {props.data?.map((task) => (
            <TaskItemMemoized key={task.id} {...task} />
          ))}
        </ul>
      );
    })()}
  </>
);

export const TaskList: React.FC<ContainerProps> = (props) => {
  const { isLoading, isError, data } = useQuery(taskKeys.list(), fetchTasks);

  return (
    <View isLoading={isLoading} isError={isError} data={data} {...props} />
  );
};
