import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'alimentos', id);
    setIsLoading(true);

    getDoc(itemRef).then((response) => {
      setIsLoading(false);
      if (response.exists()) {
        setItem({
          id: response.id,
          ...response.data(),
        });
      }
    });

  }, [id]);

 
  return (
    <>
    {isLoading && <h2 className="bg-info" >Preparando... </h2>}
    {!isLoading && !item && <h2 className="bg-info" >Alimento no encontrado </h2>}
    {!isLoading && item && <ItemDetail producto={item} />}
    </>
    );
  };

export default ItemDetailContainer;
