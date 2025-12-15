import {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  documentId,
  query,
  where,
} from "firebase/firestore";
import { db } from "../data/data.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUserModel = (user) => {
  return new Promise(async (res, rej) => {
    try {
      console.log(user);
      const passhash = await bcrypt.hash(user.password, 10);
      const email = user.email;
      const newUser = { email: email, clave: passhash };

      const docRef = await addDoc(collection(db, "usuarios"), newUser);
      res({ ...newUser, id: docRef.id });
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};

export const getLoginModel = (loginData) => {
  return new Promise(async (res, rej) => {
    try {
      const email = loginData.email;
      const password = loginData.password;

      const q = query(collection(db, "usuarios"), where("email", "==", email));

      const queryRes = await getDocs(q);
      console.log("query rest ", queryRes);

      if (queryRes.empty) {
        return rej({ status: 404, msg: "Usuario no encontrado" });
      }

      let user;
      queryRes.forEach((docSnap) => {
        user = { id: docSnap.id, ...docSnap.data() };
      });
      console.log("user clave ", user.clave);

      const validPassword = await bcrypt.compare(password, user.clave);
      if (!validPassword) return rej({ status: 401, msg: "Clave incorrecta" });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res({ token });
    } catch (error) {
      rej(error);
    }
  });
};
