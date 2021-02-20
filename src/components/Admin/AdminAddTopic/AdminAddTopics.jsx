import React, { useContext, useState } from "react";
import classes from "../Admin.module.css";
import { useHistory } from "react-router-dom";
import { docsContextNew } from "../../../contexts/DocsContextNew";


import { CircularProgress, TextField, Button } from '@material-ui/core';

export default function AdminAddTopics() {
  const { docs, getThemes, themeDetail, addTopic } = useContext(docsContextNew);

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory()

  const handleAdd = (e) => {
    if (!title || !img || !description) {
      alert("заполните все поля!");
      return;
    }

    let newTopic = {
      title,
      img,
      description,
    };

    // let newObj = themeDetail.topics.push(newTopic)

    addTopic(newTopic);
    setTitle("");
    setImg("");
    setDescription("");
  };

  return (
    <div>
      {themeDetail ? (
        <>
          <div className={classes.adminAddTheme}>
            <h1>Add topic in "{themeDetail.title}" theme:</h1>
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
        </>)
        : (<CircularProgress
          size={64}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            right: 0,
            left: 0,
            top: '45vh',
            color: 'orange'
          }} />)

      }
    </div>
  );
}
