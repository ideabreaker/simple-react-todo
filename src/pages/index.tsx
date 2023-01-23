import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Todo from '../components/Todo';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple React Todo App</title>
        <meta name="description" content="simple react todo app, generated with t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Todo />
      </main>
    </>
  );
};

export default Home;
