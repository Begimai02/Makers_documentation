import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import classes from "../Admin.module.css";
import { docsContext } from "../../../contexts/DocsContext";
import AdminThemeChoose from "./AdminThemeChoose";

export default function AdminAddTopics() {
  const { addNewTopic, themeId } = useContext(docsContext);
  // const [idOfTheme, setIdOfTheme] = useContext(themeId);

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (e) => {
    let newTopic = {
      title,
      img,
      description,
      themeId: themeId,
    };
    if (!title || !img || !description) {
      alert("заполните все поля!");
      return;
    }
    addNewTopic(newTopic);

    setTitle("");
    setImg("");
    setDescription("");
  };
  console.log(themeId);

  return (
    <div>
      <div className={classes.adminAddTheme}>
        <h1>Add topics</h1>
        <AdminThemeChoose />
        <TextField
          type="title"
          name="title"
          id="standard-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth={true}
          style={{ marginBottom: 30 }}
          variant="outlined"
          placeholder="Title"
        />
        <TextField
          type="img"
          name="img"
          id="standard-img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          fullWidth={true}
          style={{ marginBottom: 30 }}
          variant="outlined"
          placeholder="Image's url"
        />

        <TextField
          type="description"
          name="description"
          id="standard-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={12}
          fullWidth={true}
          style={{ marginBottom: 30 }}
          variant="outlined"
          placeholder="Description"
        />
        <Button
          onClick={handleAdd}
          variant="contained"
          className={classes.addTopicBtn}
        >
          Add Topic
        </Button>
      </div>
    </div>
  );
}
