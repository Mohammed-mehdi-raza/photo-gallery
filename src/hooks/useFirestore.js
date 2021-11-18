import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('time', 'desc')
            .onSnapshot((snap) => {
                const documents = [];
                snap.forEach(docs => {
                    documents.push({ ...docs.data(), id: docs.id });
                });
                setDocs(documents);
            });
        
        return () => unsub();
        
    }, [collection]);
    
    return { docs };
}

export default useFirestore;