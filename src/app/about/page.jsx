import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.title}>About Us</h1>
          <h2 className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            sunt officia voluptatem tempora excepturi ut atque nulla facilis
            adipisci eius soluta veritatis ipsam culpa beatae libero id placeat.
            <br />
            <br />
            Minus voluptatibus quis totam asperiores nam delectus. Voluptatem
            dignissimos id dolorum unde, accusantium culpa, similique tenetur
            sunt nesciunt aliquid neque. Explicabo, fugit?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            sunt officia voluptatem tempora excepturi ut atque nulla facilis
            adipisci eius soluta veritatis ipsam culpa beatae libero id placeat.
            <br />
            <br />
            Minus voluptatibus quis totam asperiores nam delectus. Voluptatem
            dignissimos id dolorum unde, accusantium culpa, similique tenetur
            sunt nesciunt aliquid neque. Explicabo, fugit?
          </p>
          <Button url="contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
