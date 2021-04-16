import firebase from 'firebase';
//khi khai báo thì chỉ dùng storage
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDTfMuljveX97zZJ6g_adQHE2GiO199s6w",
    authDomain: "ecommerce-c2eec.firebaseapp.com",
    projectId: "ecommerce-c2eec",
    storageBucket: "ecommerce-c2eec.appspot.com",
    messagingSenderId: "809173806870",
    appId: "1:809173806870:web:f04804f0769aec007a6a37"
};

const config = firebase.initializeApp(firebaseConfig);

const uploadFile = async (imageName, blob) => {
    //reference // tham chiếu đến thư mục của firebase 
    //
    await config.storage().ref(`/images/${imageName}`).put(blob);
    const getUrl = await config.storage().ref(`/images/${imageName}`).getDownloadURL();
    return getUrl;
}

export { uploadFile };