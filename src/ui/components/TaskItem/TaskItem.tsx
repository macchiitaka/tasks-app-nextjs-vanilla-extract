import type { ChangeEvent } from 'react';
import { useCallback } from 'react';

import type { Task } from '../../../domain/TaskDomain';
import { useTaskMutation } from '../../../usecase/useTaskMutation';
import { useTaskRemover } from '../../../usecase/useTaskRemover';
import * as classes from './TaskItem.css';

export const TaskItem: React.FC<Task> = ({ done, id, title }) => {
  const { mutate: mutateTask } = useTaskMutation(id);
  const handleChangeDone = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      mutateTask({ id, title, done: e.target.checked });
    },
    [id, mutateTask, title],
  );

  const { mutate: removeTask } = useTaskRemover(id);
  const handleClickDelete = useCallback(() => {
    if (confirm(`Are you OK to delete "${title || 'NO TITLE'}"`)) {
      removeTask(id);
    }
  }, [id, removeTask, title]);

  return (
    <li className={classes.li}>
      <input
        className={classes.input}
        type="checkbox"
        id={`item_${id}`}
        checked={done}
        onChange={handleChangeDone}
      />
      <label className={classes.label[`done.${done}`]} htmlFor={`item_${id}`}>
        {title}
      </label>
      <button
        className={classes.button}
        type="button"
        onClick={handleClickDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
