import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';
const CardAddForm = (props) => {
  const formRef = React.createRef();
  const inputName = React.createRef();
  const inputCompany = React.createRef();
  const selectTheme = React.createRef();
  const inputTitle = React.createRef();
  const inputEmail = React.createRef();
  const textareaMessage = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputName.current.value;
    const company = inputCompany.current.value;
    const theme = selectTheme.current.value;
    const title = inputTitle.current.value;
    const email = inputEmail.current.value;
    const message = textareaMessage.current.value;

    name && props.onAdd(name, company, theme, title, email, message);

    formRef.current.reset();
    console.log(`name=${name}, company=${company}, theme=${theme}`);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={inputName}
        placeholder="name"
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={inputCompany}
        placeholder="company"
      />
      <select
        ref={selectTheme}
        className={styles.select}
        name="theme"
        placeholder="theme"
      >
        <option value="light">Light</option>
        <option value="dark">dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={inputTitle}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        ref={inputEmail}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={textareaMessage}
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
