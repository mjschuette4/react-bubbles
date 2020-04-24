import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const updateList = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => console.log(err));
  }, [update]);


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} update={updateList}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
