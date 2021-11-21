import { memo } from 'react';
import { useQuery } from 'react-query';

import type { TaskModel } from '../../../../domain/models/task-model';
import { fetchTasks, taskKeys } from '../../queries/tasks';
import { TaskLI } from '../TaskLI';
import * as classes from './style.css';

type ContainerProps = {};

type Props = {
  isLoading: boolean;
  isError: boolean;
  data: TaskModel[] | undefined;
} & ContainerProps;

const TaskLIMemoized = memo(TaskLI);

export const View: React.VFC<Props> = (props) => (
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
            <TaskLIMemoized key={task.id} {...task} />
          ))}
        </ul>
      );
    })()}
  </>
);

export const TaskUList: React.VFC<ContainerProps> = (props) => {
  const { isLoading, isError, data } = useQuery(taskKeys.list(), fetchTasks);

  return (
    <View isLoading={isLoading} isError={isError} data={data} {...props} />
  );
};
