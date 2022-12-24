/**
 * IMPORTANT
 * The default firebase initialization script from the firbase website does
 * import { intializeApp } from "firebase/app"
 * however modular imports have changed from since 9.x
 * Now
 */

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { onUnmounted, ref } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.app.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PRJECT_ID,
  storageBucket: process.app.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.app.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.app.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.app.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

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

export const createHistory = (history) => {
  return historyCollection.add(history);
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
