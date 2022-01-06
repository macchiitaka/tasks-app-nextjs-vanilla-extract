import { NewTaskForm } from '../NewTaskForm';
import { TaskList } from '../TaskList';
import * as classes from './style.css';

type ContainerProps = {};

type Props = {} & ContainerProps;

export const View: React.VFC<Props> = () => (
  <main className={classes.main}>
    <h1 className={classes.h1}>Tasks</h1>
    <NewTaskForm />
    <div className={classes.ulWrapper}>
      <TaskList />
    </div>
  </main>
);

export const Page: React.VFC<ContainerProps> = (props) => <View {...props} />;
