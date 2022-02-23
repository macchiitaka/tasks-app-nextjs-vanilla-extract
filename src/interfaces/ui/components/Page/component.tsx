import { NewTaskForm } from '../NewTaskForm';
import { TaskList } from '../TaskList';
import * as classes from './style.css';

export const View: React.VFC = () => (
  <main className={classes.main}>
    <h1 className={classes.h1}>Tasks</h1>
    <NewTaskForm />
    <div className={classes.ulWrapper}>
      <TaskList />
    </div>
  </main>
);

export const Page: React.VFC = (props) => <View {...props} />;
