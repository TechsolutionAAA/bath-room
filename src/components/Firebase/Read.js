import { getDatabase, ref, child, get } from 'firebase/database'


export const readData = () => {
    const dbRef = ref(getDatabase());
    const datas = [];
    get(child(dbRef, 'Tapware & Accessories/')).then((snapshot) => {
        if(snapshot.exists()) {
            for(var propName in snapshot.val()) {
                if(snapshot.val().hasOwnProperty(propName)) {
                    var propValue = snapshot.val()[propName];
                    datas.push(propValue);
                }
            }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return datas
}