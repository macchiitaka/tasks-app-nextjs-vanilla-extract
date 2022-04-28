import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';

import { useNewTaskMutation } from '../../../usecase/useNewTaskMutation';
import * as classes from './NewTaskForm.css';

export const NewTaskForm: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue('');
  }, []);

  const { mutate } = useNewTaskMutation();
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!value) {
        return;
      }

      mutate({ title: value });
      resetValue();
    },
    [mutate, resetValue, value],
  );

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        type="text"
        name="task"
        value={value}
        required
        maxLength={2 ** 16}
        autoFocus
        onChange={handleChangeText}
        placeholder="Add task"
        aria-label="New task"
      />
      <button className={classes.button} type="submit">
        Add
      </button>
    </form>
  );
};
