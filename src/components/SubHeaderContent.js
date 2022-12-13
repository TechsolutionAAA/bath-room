import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./Firebase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

export function SubHeaderContent(props) {
  const { setShow, category, subCategory, keyRefresh } = props;
  const [modelDatas, setModelData] = useState([]);
  console.log(category);
  console.log(subCategory);

  const fetchData = async () => {
    let tempDatas = [];
    await getDocs(collection(db, "model_data")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (newData !== undefined && newData !== null) {
        for (let i = 0; i < newData.length; i++) {
          let data = newData[i].data;
          if (data.category === category && data.subCategory ===subCategory)
          {
            data.id = newData[i].id;
            tempDatas.push(data);
          }
        }
        setModelData(tempDatas);
        console.log(tempDatas);
      }
    });
  };

  const DeleteData = async (id) => {
    const docRef = doc(db, "model_data", id); 
    deleteDoc(docRef) .then(() => { console.log("Entire Document has been deleted successfully.") }) .catch(error => { console.log(error); })
    fetchData();
    
  };
  useEffect(() => {
    fetchData();
  }, [keyRefresh]);

  return (
    <div className="d-flex flex-wrap w-100 calc">
      {modelDatas.map((data) => {
        return (
          <div
            key={uuidv4()}
            className="card d-flex align-items-center text-center p-2 rounded card1 marr"
          >
            <p className="m-2" style={{ maxWidth: "150px", minHeight: "65px" }}>
              {data.title}
            </p>
            <img
              style={{ width: "70px", scale: "1.2" }}
              className="m-3 p-2"
              src={data.imageUrl}
            ></img>
            <div
              className="btn m-1 rounded-5 shadow-sm"
              onClick={() => props.loadModel(data.modelUrl)}
            >
              Add to Plan +
            </div>
            {localStorage.getItem("bathroom_isOwner") === "false" ? (
              ""
            ) : (
              <div
                className="btn m-1 rounded-5 shadow-sm"
                onClick={() => DeleteData(data.id)}
              >
                Delete
              </div>
            )}
          </div>
        );
      })}
      {localStorage.getItem("bathroom_isOwner") === "false" ? (
        ""
      ) : (
        <div className="create" onClick={() => setShow(true)}>
          <p>Create</p>
        </div>
      )}
    </div>
  );
}
