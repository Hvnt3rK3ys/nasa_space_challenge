import React from "react";
import styles from "../styles/not.module.scss";
import Link from "next/link";
import Image from "next/image";

//https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602784.htm#query=404%20illustrations&position=2&from_view=keyword&track=ais_hybrid&uuid=8807e679-94a1-408a-a667-aed530aed724
const NotFound: React.FC = () => {
  return (
    <main className={styles.mainNotFound}>
      <Link href="/" prefetch={false}>
        <h1 className={styles.notNumber}>404</h1>
        <Image
          src="/efe.png" 
          alt="404 page not found"
          width={700}
          height={700}
          className={styles.imageNot}
        />
        <h2 className={styles.notAdvise}>Page not found</h2>
      </Link>
    </main>
  );
};

export default NotFound;

