import { useState, useEffect } from 'react';
import { rasterFireStore } from "../firebase/config";

const useFireStore = (collection) => {

    const [fileList, setFileList] = useState([]);

   // To get file list from firestore db.
   useEffect(() => {
        const unsub = rasterFireStore.collection(collection).orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setFileList(documents);
        });
        return () => unsub();
   }, [collection]);

   return { fileList }
   
}

export default useFireStore;