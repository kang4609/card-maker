import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';
const CardAddForm = (props) => {
  const onSubmit = (event) => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      />
      <select className={styles.select} name="theme" placeholder="theme">
        <option value="light">Light</option>
        <option value="dark">dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
