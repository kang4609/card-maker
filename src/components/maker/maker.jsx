import React, { useEffect, useState } from 'react';
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
      name: 'title',
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
      name: 'title',
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
      name: 'title',
      company: 'apple',
      theme: 'colorful',
      title: 'software enginner',
      email: 'aaaa@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: null,
    },
  ]);

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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
