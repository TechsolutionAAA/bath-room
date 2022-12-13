import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import app from './app'; 

export const db = getFirestore(app);
// Firebase storage reference
const storage = getStorage(app);
export default storage;