import { Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { docsContext } from "../../../contexts/DocsContext";

const TopicsDetails = () => {
  const { docs, topics, getDocs } = useContext(docsContext);
  useEffect(() => {
    getDocs();
  }, []);
  // console.log(docs);
  return (
    <>
      {docs.map((item) => (
        <>
          <Typography variant="h4" key={item.id + "typo"}>
            {item.title}
          </Typography>
          <div>{item.description}</div>
          <div>
            <img src={item.img} alt="smthng" />
          </div>
        </>
      ))}
    </>
  );
};

export default TopicsDetails;
