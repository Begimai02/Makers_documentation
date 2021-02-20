import React, { useContext, useEffect, useState } from 'react'
import { docsContextNew } from '../../contexts/DocsContextNew'
import classes from './Docs.module.css';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { red, green } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import { CircularProgress, TextField } from '@material-ui/core';
import Truncate from 'react-truncate';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: "20px",
    height: 350,
  },
  media: {
    height: 140,
  },
  actions: {
    margin: "0 auto !important"
  }
});


export default function DocsTopicCard() {
  const classes = useStyles();

  const { docs, getThemes, themeDetail, deleteTopic, topicId } = useContext(docsContextNew);
  const [detail, setDetail] = useState(themeDetail.topics);

  // useEffect(() => {
  //   setDetail()
  // }, [themeDetail])
  console.log(themeDetail)
  console.log(detail)

  return (
    <div className={classes.container}>
      Я точно тут?
      {/* <h1>Topics of the {themeDetail.title} </h1> */}
      {themeDetail ? (
        <>
          {/* HERE GOES CARD TOPICS ================================== */}
          <div>
            {detail.map((item, index) => (
              <div >
                <h2>{item.title}</h2>
                <div className={classes.detailImg}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={classes.detailDesc}>
                  <p>{item.description} </p>
                </div>

                {/* <div > 
                  <div className={classes.actions}>
                    <IconButton aria-label="edit" >
                      <EditIcon style={{ color: green[500] }} />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTopic(item.id)} >
                      <DeleteIcon style={{ color: red[500] }} />
                    </IconButton>
                  </div>
                </div> */}

              </div>
            ))}
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
  )
}
