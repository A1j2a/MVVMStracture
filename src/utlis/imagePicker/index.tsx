import ImageCropPicker from 'react-native-image-crop-picker';

type FromType = 'camera' | 'gallery';

export async function showImagePicker(from: FromType, dispatch) {
  let image = new Promise((resolve, reject) => {
    from === 'camera'
      ? setTimeout(() => {
          ImageCropPicker.openCamera({
            mediaType: 'photo',
            compressImageQuality: 0.9,
            cropping: true,
          })
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              console.log('errorerror camera', error);
            });
        }, 100)
      : setTimeout(() => {
          ImageCropPicker.openPicker({
            mediaType: 'photo',
            compressImageQuality: 0.9,
            cropping: true,
          })
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              console.log('errorerror', error);
            });
        }, 500);
  });

  return image;
}
