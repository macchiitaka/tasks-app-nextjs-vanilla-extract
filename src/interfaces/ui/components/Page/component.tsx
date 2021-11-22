import { useColorScheme } from '../../style/color-scheme';
import { NewTaskForm } from '../NewTaskForm';
import { TaskUList } from '../TaskUList';
import * as classes from './style.css';

type ContainerProps = {};

type Props = {} & ContainerProps;

export const View: React.VFC<Props> = () => {
  const colorScheme = useColorScheme();
  return (
    <main className={classes.main}>
      <h1 className={classes.h1[colorScheme]}>Tasks</h1>
      <NewTaskForm />
      <div className={classes.ulWrapper}>
        <TaskUList />
      </div>
    </main>
  );
};

export const Page: React.VFC<ContainerProps> = (props) => <View {...props} />;
