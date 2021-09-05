class ImageUpload {
  async upload(fileInput) {
    console.log('imageuplod');
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const presets = process.env.REACT_APP_CLOUDINARY_PRESETS;
    console.log(cloudName);

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const files = document.getElementById(fileInput).files;
    const file = files[0];
    const formData = new FormData();

    console.log(`files.length=${fileInput}`);
    formData.append('file', file);
    formData.append('upload_preset', presets);
    formData.append('cloud_name', cloudName);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log(result);
    return result;
  }
}
export default ImageUpload;
