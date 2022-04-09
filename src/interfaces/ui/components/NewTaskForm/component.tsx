import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';

import { useSubmitHandler } from './hook';
import * as classes from './style.css';

type ContainerProps = {};

type Props = {
  value: string;
  onChangeText(e: ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
} & ContainerProps;

export const View: React.FC<Props> = (props) => (
  <form className={classes.form} onSubmit={props.onSubmit}>
    <input
      className={classes.input}
      type="text"
      name="task"
      value={props.value}
      required
      maxLength={2 ** 16}
      autoFocus
      onChange={props.onChangeText}
      placeholder="Add task"
      aria-label="New task"
    />
    <button className={classes.button} type="submit">
      Add
    </button>
  </form>
);

export const NewTaskForm: React.FC<ContainerProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue('');
  }, []);

  const handleSubmit = useSubmitHandler(value, resetValue);

  return (
    <View
      {...props}
      value={value}
      onChangeText={handleChangeText}
      onSubmit={handleSubmit}
    />
  );
};
