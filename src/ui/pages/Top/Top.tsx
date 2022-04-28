import Head from 'next/head';

import { NewTaskForm } from '../../components/NewTaskForm/NewTaskForm';
import { TaskList } from '../../components/TaskList/TaskList';
import * as classes from './Top.css';

export const Top: React.FC = () => (
  <>
    <Head>
      <title>Tasks</title>
    </Head>
    <main className={classes.main}>
      <h1 className={classes.h1}>Tasks</h1>
      <NewTaskForm />
      <div className={classes.ulWrapper}>
        <TaskList />
      </div>
    </main>
  </>
);
