import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export async function uploadProducts(products) {
  // Recorremos uno por uno (podés usar Promise.all si querés paralelismo)
  for (const item of products) {
    // Usamos el ID del producto de la API como ID del documento
    const docRef = doc(db, "products", String(item.id));

    // merge: true => si existe lo actualiza, si no lo crea
    await setDoc(docRef, item, { merge: true });
  }

  console.log("Productos sincronizados sin duplicados");
}
