import { getDatabase, ref, push } from 'firebase/database'

export default function CreateData(title, imageURL, modelURL) {
    const db =getDatabase();
    push(ref(db, 'Tapware & Accessories/'), {
        title: title,
        image: imageURL,
        model: modelURL
    });
}