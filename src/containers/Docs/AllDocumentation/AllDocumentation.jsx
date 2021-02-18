import { Container, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TopicsDetails from "./TopicsDetails";
import { docsContext } from "../../../contexts/DocsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    textAlign: "center",
  },
}));

const AllDocumentation = () => {
  const classes = useStyles();
  const { docs, topics, getDocs } = useContext(docsContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
        {/* <TopicsDetails /> */}
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
          </div>
        ))}
      </div>
      <div style={{ width: "400px", height: "auto" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              General settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AllDocumentation;
