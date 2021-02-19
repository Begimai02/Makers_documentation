import { Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { docsContext } from "../../../contexts/DocsContext";

const TopicsDetails = () => {
  const { docs, getDocs, getTopics, topics } = useContext(docsContext);
  useEffect(() => {
    getDocs();
    getTopics();
  }, []);

  // console.log(docs);
  return (
    <>
      {docs.map((item) => (
        <div
          style={{
            width: "100%",
            height: "80vh",
          }}
        >
          <Typography variant="h4" key={item.id + "typo"}>
            {item.title}
          </Typography>
          <div>{item.description}</div>
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={item.img}
              alt="smthng"
            />
          </div>

          {topics.map((item, index) => (
            <div></div>
          ))}
        </div>
      ))}
      {/* {topics.map((item) => (
        <div
          style={{
            width: "100%",
            height: "80vh",
          }}
        >
          <Typography variant="h4" key={item.id + "typo"}>
            {item.title}
          </Typography>
          <div>{item.description}</div>
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={item.img}
              alt="smthng"
            />
          </div>
        </div>
      ))} */}
    </>
  );
};

export default TopicsDetails;
