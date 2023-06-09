import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let`s Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            className={styles.textArea}
          ></textarea>
          <Button url="" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
