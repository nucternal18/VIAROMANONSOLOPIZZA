import React, { useState, useEffect } from "react";
import axios from "axios";
import { projectFirestore, timestamp } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";

const Instagram = () => {
  // const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  const { docs } = useFirestore("instImages");
  console.log(docs);

  useEffect(() => {
    const collectionRef = projectFirestore.collection("instImages");

    axios(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username&access_token=${process.env.REACT_APP_INSTAGRAM_APP_TOKEN}`
    )
      .then((res) => {
        const results = res.data.data;
        const createdAt = timestamp();
        results.forEach((data) => {
          console.log(data);
          collectionRef
            .doc(data.id)
            .add({ type: data.media_type, url: data.media_url, createdAt });
          //   docs.forEach((doc) => {
          //     if (doc.id !== data.id) {
          //       collectionRef.add({ data, createdAt });
          //     }
          //   });
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  return <div></div>;
};

export default Instagram;
