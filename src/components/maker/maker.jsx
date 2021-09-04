import React, { useEffect, useState } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'title1',
      company: 'apple',
      theme: 'dark',
      title: 'software enginner',
      email: 'aaaa@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: null,
    },
    {
      id: '2',
      name: 'title2',
      company: 'apple',
      theme: 'light',
      title: 'software enginner',
      email: 'aaaa@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: 'test.png',
    },
    {
      id: '3',
      name: 'title3',
      company: 'apple',
      theme: 'colorful',
      title: 'software enginner',
      email: 'aaaa@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: null,
    },
  ]);

  const handleAdd = (name, company, theme, title, email, message) => {
    const addCards = [
      ...cards,
      {
        id: Date.now(),
        name,
        company,
        theme,
        title,
        email,
        message,
        fileName: '',
        fileURL: null,
      },
    ];

    setCards(addCards);
  };

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor onAdd={handleAdd} cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
