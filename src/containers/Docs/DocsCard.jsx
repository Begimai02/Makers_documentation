// import React, { useContext, useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// // import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Container } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
// import { docsContext } from '../../contexts/DocsContext';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: "280px",
//     textAlign: "center",
//     background: "#545E80",
//     color: 'white',
//     width: "100%",
//     marginTop: "20px",
//     minHeight: "130px",
//     height: "100%",
//     backgroundColor: "black!important",
//     margin: "15px ",
//     borderRadius: "25px"
//   },
//   media: {
//     minHeight: "100px",
//     backgroundColor: "black!important"

//   }, container: {
//     display: "flex",
//     flexWrap: 'wrap',
//     justifyContent: "space-evenly"
//   },
//   color: {
//     color: "#FFE600 !important",
//     marginTop: "-40px"
//   },
//   text: {
//     marginTop: "7px",
//     textAlign: "center"
//   },
//   text1: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "7px",
//     fontSize: "100px",
//   },
//   h: {
//     backgroundColor: "white",
//     outline: "none",
//     border: "none"

//   }
// });

// export default function DocsCard() {
//   const classes = useStyles()
//   const { docs, getDocs } = useContext(docsContext)
//   const [titles, setTitles] = useState(docs)
//   console.log(docs)
//   useEffect(() => {
//     getDocs()
//   }, [])
//   return (
//     // <div>
//     //   {titles ?
//     //     <>
//     //       <Container>
//     //         <Card >
//     //           <CardActionArea>
//     //             <CardMedia
//     //               title="IMG"
//     //             />
//     //             <Typography variant="h1" noWrap align="center" gutterBottom style={{color: "white"}}>
//     //               {docs.map((item) => {
//     //                 xgxfgfg
//     //                 { item.title }

//     //               })}
//     //             </Typography>
//     //             <CardContent>
//     //             </CardContent>
//     //           </CardActionArea>
//     //         </Card>
//     //       </Container>
//     //       <div className={classes.container}>
//     //         <div style={{ display: "flex" }}>
//     //           <Fab size="small" color="transparent" aria-label="add" className={classes.margin}>
//     //             <AddIcon />
//     //           </Fab>
//     //           <Typography className={classes.text}>Добавить тему</Typography>
//     //         </div>
//     //       </div>
//     //       <Container className={classes.container}>
//     //         <Card className={classes.root}>
//     //           <CardActionArea>
//     //             <CardMedia
//     //               className={classes.media}
//     //               title="IMG"
//     //             />
//     //             <Typography variant="h5" className={classes.color}  >
//     //               {/* {docs.map((item) => {
//     //                 xgxfgfg
//     //                   {item.title}
                    
//     //               })} */}
//     //             </Typography>
//     //             <CardContent>
//     //             </CardContent>
//     //           </CardActionArea>
//     //         </Card>

//     //       </Container>

//     //     </>
//     //     : null
//     //   }

//     // </div>
//     <h1></h1>
    
//   )
// }
