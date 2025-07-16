
import { db } from '../data/data.js';

import {
    collection, getDocs, getDoc, addDoc, deleteDoc,doc, setDoc
  } from 'firebase/firestore';   

  const productModel = {
    getAllProducts, getProductById, saveProduct, updateProduct, deleteProduct

  }
const productsCollection = collection(db,'products');

export async function getAllProducts() {
  try{
    const querySnapShot = await getDocs(productsCollection);
    const products = [];
    querySnapShot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data()});
    });
    return products;
   }catch  (error){
        console.error(error);
   }
}

export async function getProductById(id) {
    try{
    const productDoc = await getDoc(doc(productsCollection, id));
    if(productDoc.exists()){
        return productDoc.data();
    }else {
        return null;
    }
    }catch  (error){
        console.error(error);
    }
     return productDoc.data();
};

export async function saveProduct ( data) {
  try {
    console.log(data);
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }  
};

// PUT
export async function updateProduct(id, productData) {
  try {

    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, productData); // reemplazo completo
    return { id, ...productData };
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct (id) {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    
    if (!snapshot.exists()) {
       return "El producto que desea eliminar no existe";
    }

    await deleteDoc(productRef);
    return "El producto fue eliminado";
  } catch (error) {    
    console.log("Error eliminando el product ", error);
  }
};  

export default productModel;

