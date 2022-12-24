// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { onUnmounted, ref } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLTiKwyNk0SJnYIcjVejmNOxBGSMzJWh8",
  authDomain: "my-podcast-plus.firebaseapp.com",
  projectId: "my-podcast-plus",
  storageBucket: "my-podcast-plus.appspot.com",
  messagingSenderId: "1010499356981",
  appId: "1:1010499356981:web:c50d65d90fdfbf937b647c",
  measurementId: "G-09Y3K8EDQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();
const podcastCollection = db.collection("podcast");

const likedCollection = db.collection("liked");

const historyCollection = db.collection("history");

// creating a new database entry
export const createPodcast = (podcast) => {
  return podcastCollection.add(podcast);
};

export const createLiked = (liked) => {
  return likedCollection.add(liked);
};

// getting a database entry from firebase
export const getPodcast = async (id) => {
  const podcast = await podcastCollection.doc(id).get();
  return podcast.exists ? podcast.data() : null;
};

export const getLiked = async () => {
  const liked = await likedCollection.doc().get();
  return liked.exists ? liked.data() : null;
};

export const useLoadPodcast = () => {
  const podcasts = ref([]);
  const close = podcastCollection.onSnapshot((snapshot) => {
    podcasts.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return podcasts;
};
