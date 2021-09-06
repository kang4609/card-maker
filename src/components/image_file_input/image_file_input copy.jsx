import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ card, imageUpload, onImageUpload }) => {
  let id = '0';
  console.log(`card1=${card}`);
  if (card !== undefined) {
    console.log(`card2=${card}`);
    id = card.id;
  }
  const fileInput = id + 'file';

  const onFileUpload = (event) => {
    event.preventDefault();

    imageUpload
      .upload(fileInput) //
      .then((data) => {
        const upload = { ...card, fileName: data.public_id, fileURL: data.url };
        console.log(`upload:${upload}`);
        onImageUpload(upload);
      });
  };

  return (
    <>
      <input type="file" name={fileInput} id={fileInput} />
      <button onClick={onFileUpload}>Image</button>;
    </>
  );
};
export default ImageFileInput;
