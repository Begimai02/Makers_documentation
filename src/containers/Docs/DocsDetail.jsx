import React, { useContext, useEffect, useState } from 'react'
import { docsContextNew } from '../../contexts/DocsContextNew'
import classes from './Docs.module.css';
import DocsTopicCard from './DocsTopicCard';

import { CircularProgress, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';



export default function DocsDetail() {
  const { docs, getThemes, themeDetail } = useContext(docsContextNew);
  const [detail, setDetail] = useState(themeDetail);

  useEffect(() => {
    setDetail()
  }, [themeDetail])
  console.log(themeDetail)
  console.log(detail)

  return (
    <div>
      {themeDetail ? (
        <>
          <Link to="/add-topic" style={{ textDecoration: "none" }}>
            <div>
              <LibraryAddIcon fontSize="large" style={{color: "green"}} />
            </div>
          </Link>
          <div className={classes.container}>
            <h1>{themeDetail.title}</h1>
            <div className={classes.detailImg}>
              <img src={themeDetail.img} alt={themeDetail.title} />
            </div>
            <div className={classes.detailDesc}>
              <p>
                {themeDetail.description}
              </p>
            </div>

          </div>
          <DocsTopicCard />
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
