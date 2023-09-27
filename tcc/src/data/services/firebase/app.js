
import {uploadImage} from "./firebase.js"

document.getElementById('upload').addEventListener('click', async () => {

    const image = document.getElementById('fileImage')

    console.log ( await uploadImage(image.files[0], 'teste'))


})