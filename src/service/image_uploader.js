class ImageUploader {
  async upload(file) {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const presets = process.env.REACT_APP_CLOUDINARY_PRESETS;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', presets);
    data.append('cloud_name', cloudName);

    const result = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: data,
      }
    );

    return await result.json();
  }
}

export default ImageUploader;
