import React, { useContext, useEffect } from "react";

import TopicsDetails from "./TopicsDetails";
import { docsContext } from "../../../contexts/DocsContext";
import AccordionDocs from "./AccordionDocs";

const AllDocumentation = () => {
  const { docs, topics, getDocs } = useContext(docsContext);

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <TopicsDetails />
      </div>
      <div style={{ width: "400px", height: "auto" }}>
        <AccordionDocs />
      </div>
    </div>
  );
};

export default AllDocumentation;
