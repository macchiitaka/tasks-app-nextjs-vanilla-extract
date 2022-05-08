import { DevTool } from '@hookform/devtools';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import { useNewTaskMutation } from '../../../usecase/useNewTaskMutation';
import * as classes from './NewTaskForm.css';

export const NewTaskForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: { title: '' },
  });
  const { mutate } = useNewTaskMutation();

  return (
    <>
      <form
        className={classes.form}
        onSubmit={handleSubmit(({ title }) => {
          mutate({ title });
          reset();
        })}
      >
        <input
          {...register('title', { required: true, maxLength: 10 })}
          className={classes.input}
          type="text"
          autoFocus
          placeholder="Add task"
          aria-label="New task"
          aria-invalid={!!errors.title}
        />
        <button
          className={classes.button}
          type="submit"
          disabled={Object.keys(errors).length > 0}
        >
          Add
        </button>
      </form>
      <ErrorMessage errors={errors} name="title" />

      {process.env.NODE_ENV !== 'production' && <DevTool control={control} />}
    </>
  );
};
