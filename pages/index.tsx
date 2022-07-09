import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

type Post = {
  id: string;
  title: string;
  content: string;
};

const HomePage: NextPage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  useEffect(() => {
    fetch(`/api/post`).then((result) => console.info(result));
    // .then((setPosts));
  }, []);
  if (!posts) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="An awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>
        <div style={{ height: "50px" }}></div>
        {posts.map((post) => {
          return (
            <a href={`/post/${post.id}`} key={post.id}>
              <div className={styles.card}>
                <p>{post.title}</p>
              </div>
            </a>
          );
        })}
      </main>
    </div>
  );
};

export default HomePage;
