import dynamic from 'next/dynamic';
import { memo } from 'react';

import { useTaskList } from '../../../usecase/useTaskList';
import * as classes from './TaskList.css';

const TaskItem = dynamic(() => import('../TaskItem/TaskItem'));
const TaskItemMemoized = memo(TaskItem);

export const TaskList: React.FC = () => {
  const { isLoading, isError, data } = useTaskList();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <ul className={classes.ul}>
      {data.map((task) => (
        <TaskItemMemoized key={task.id} {...task} />
      ))}
    </ul>
  );
};
