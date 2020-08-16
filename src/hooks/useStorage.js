import { useState, useEffect } from 'react';
import { rasterStorage, rasterFireStore, timestamp } from "../firebase/config";

function useStorage(selectedFile) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // References used:
        // Create a reference in firebase storage where we put our file in default bucket.
        const storageRef = rasterStorage.ref(selectedFile.name);
        // Adds stored files properties via a collection in database.
        const collectionInstance = rasterFireStore.collection('images');

        // Put is used to upload file to storage in firebase and on is to attach an event
        // state_changed is an event provided by firebase and react on changes of every progress.
        storageRef.put(selectedFile).on('state_changed', (snap) => {
            let progressPercentage = (snap.bytesTransferred/snap.totalBytes) * 100;
            setProgress(progressPercentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionInstance.add({
                url,
                createdAt
            });
            setUrl(url);
        });
        return () => {
            
        }
    }, [selectedFile]);

    return { progress, url, error}

}

export default useStorage;