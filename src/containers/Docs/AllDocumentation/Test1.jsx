import React, { useEffect, useContext, useState } from 'react';
import { docsContextNew } from '../../../contexts/DocsContextNew';
import { Link } from 'react-router-dom';

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


const Test1 = () => {
  const { docs, getThemes, deleteTheme, getThemeId } = useContext(docsContextNew);
  const [docsy, setDocsy] = useState(docs);

  useEffect(() => {
    getThemes()
    setDocsy()
  }, [])

  // useEffect(() => {
  //     (async () => {
  //     await getThemes();
  // })();
  // }, [])

  console.log(docsy)

  console.log(docs)

  const classes = useStyles();

  return (
    <>  robit test1
      {docs ?
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "space-evenly",
          }}
        >
          {docs.map((item, index) => (
            <>
            <Card className={classes.root} key={index + "theme cards"}>
              <Link to="/detail-new" style={{ textDecoration: "none" }}>
                <CardActionArea onClick={() => getThemeId(item.id)}>
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title="Image of the theme"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <Truncate lines={3} ellipsis={<span>...</span>}>
                        {item.description}
                      </Truncate>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <div > {/* НЕ СМОГЛА СДВИНУТЬ ЭТИ BUTTONS В СЕРЕДИНУ ИЛИ ПРАВЫЙ КОНЕЦ */}
                  <div className={classes.actions}>
                    <Link to="/detail-new" style={{ textDecoration: "none" }}>
                      <Button size="small" color="primary" onClick={() => getThemeId(item.id)}>
                        More
                          </Button>
                    </Link>
                    <IconButton aria-label="edit" >
                      <EditIcon style={{ color: green[500] }} />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTheme(item.id)}>
                      <DeleteIcon style={{ color: red[500] }} />
                    </IconButton>
                  </div>
                </div>

              </CardActions>
            </Card>

            </>
          ))}
        </div>
        : (<CircularProgress
          size={64}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            right: 0,
            left: 0,
            top: '45vh',
            color: 'yellow'
          }} />)
      }
    </>
  );
}


export default Test1;



