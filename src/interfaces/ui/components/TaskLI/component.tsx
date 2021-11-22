import type { ChangeEvent } from 'react';

import type { TaskModel } from '../../../../domain/models/task-model';
import { useColorScheme } from '../../style/color-scheme';
import { useChangeDoneHandler, useClickDeleteHandler } from './hook';
import * as classes from './style.css';

type ContainerProps = TaskModel;

type Props = {
  onChangeDone(e: ChangeEvent<HTMLInputElement>): void;
  onClickDelete(): void;
} & ContainerProps;

export const View: React.VFC<Props> = (props) => {
  const id = `item_${props.id}`;
  const colorScheme = useColorScheme();
  return (
    <li className={classes.li}>
      <input
        className={classes.input}
        type="checkbox"
        id={id}
        checked={props.done}
        onChange={props.onChangeDone}
      />
      <label
        className={classes.label({
          colorScheme,
          done: props.done,
        })}
        htmlFor={id}
      >
        {props.title}
      </label>
      <button
        className={classes.button}
        type="button"
        onClick={props.onClickDelete}
      >
        Delete
      </button>
    </li>
  );
};

export const TaskLI: React.VFC<ContainerProps> = (props) => {
  const handleChangeDone = useChangeDoneHandler(props.id, props.title);
  const handleClickDelete = useClickDeleteHandler(props.id, props.title);

  return (
    <View
      {...props}
      onChangeDone={handleChangeDone}
      onClickDelete={handleClickDelete}
    />
  );
};
