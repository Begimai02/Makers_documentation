import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import classes from "./Admin.module.css";
import { docsContext } from "../../contexts/DocsContext";

export default function AdminAddTheme() {
  const { addNewTheme } = useContext(docsContext);

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (e) => {
    let newTheme = {
      title,
      img,
      description,
    };
    if (!title || !img || !description) {
      alert("заполните все поля!");
      return;
    }
    addNewTheme(newTheme);
    setTitle("");
    setImg("");
    setDescription("");
  };

  return (
    <div>
      <div className={classes.adminAddTheme}>
        <h1>Add new theme</h1>
        <TextField
          type="title"
          name="title"
          value={title}
          id="standard-title"
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

        {/* <img src={memeImg} alt="Theme's screen"/> */}
        <TextField
          type="description"
          name="description"
          id="standard-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={7}
          fullWidth={true}
          style={{ marginBottom: 30 }}
          variant="outlined"
          placeholder="Description"
        />
        <Button onClick={handleAdd} variant="contained">
          Add
        </Button>
      </div>
    </div>
  );
}
