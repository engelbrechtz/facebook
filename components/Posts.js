import { db } from "../Firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import Post from "./Post";
import { useState, useEffect } from "react";

const Posts = () => {
  const [realtimePosts, setRealtimePosts] = useState([]);

  useEffect(() => {
    // console.log(`got ${querySnap.size} docs`);
    // console.log("number of realtime posts: ", realtimePosts.length);
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef); // , orderBy("desc"));
    const unsubscribe = onSnapshot(q, (querySnap) => {
      let thePosts = [];
      querySnap.forEach((docSnap) => {
        let docData = docSnap.data();
        thePosts.push({ __id: docSnap.id, ...docData })   ;  ;
      });
      setRealtimePosts(thePosts);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      {!realtimePosts ? (
        <h6>Loading...</h6>
      ) : (
        realtimePosts.map((post) => (
          <Post
            key={post.__id}
            name={post.name}
            email={post.email}
            message={post.message}
            image={post.image}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
