import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaIcWfJhSYAl712qphCxgHHq5k7WzixdU",
  authDomain: "costurie-images.firebaseapp.com",
  projectId: "costurie-images",
  storageBucket: "costurie-images.appspot.com",
  messagingSenderId: "457549159938",
  appId: "1:457549159938:web:8d5f5d9c56c4fbe96bd11b",
  measurementId: "G-P8X0BNN994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getStorage, ref, uploadBytes, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js"

const uploadImage =  async (image, name) => {
    const storage = getStorage(app);
    // const storageRef = ref(storage);
    const mountainsRef = ref(storage, `img/${name}.jpg`);
    
    // uploadBytes(mountainsRef, image).then( (snapshot) => {
    //     getDownloadURL(mountainsRef).then ( (url) => url)
    // })

    await uploadBytes(mountainsRef, image)

    return await getDownloadURL(mountainsRef)
   
} 

export {
  uploadImage
}