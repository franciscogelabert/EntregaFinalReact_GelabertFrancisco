import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  limit
} from 'firebase/firestore';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { clase } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'alimentos');
    setIsLoading(true);

    if (clase === undefined) {
      var q = query(itemCollection, limit(20));
    } else {
      var q = query(itemCollection, where('clase', '==', clase), limit(10));
    
    }

    getDocs(q).then((snapshot) => {
      const itemsFromSnapshot = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setItems(itemsFromSnapshot);
      setIsLoading(false);
    });
  }, [clase]);



  return <ItemList productos={items} isLoading={isLoading} />;
};

export default ItemListContainer;
