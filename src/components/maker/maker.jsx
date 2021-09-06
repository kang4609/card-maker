import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

  const createOrUpdateCard = (card) => {
    //const updated = { ...cards };
    //updated[card.id] = card;
    // setCards(updated);

    setCards((cards) => {
      console.log(`card====`);
      const updated = { ...cards };
      console.log(`card====ww = ${card.id}`);
      updated[card.id] = card;
      console.log(`card====ww22`);
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
        <Editor
          FileInput={FileInput}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          cards={cards}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
