import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useContext } from 'react';
import { docsContext } from '../../../contexts/DocsContext';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: theme.spacing(0),
        maxWidth: "900px",
        width: "100%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AdminThemeChoose() {

    const { docs, getDocs, getThemeId } = useContext(docsContext);
    const [titles, setTitles] = useState(docs);
    console.log(docs)
    console.log(titles)

    useEffect(() => {
        getDocs()
    }, [])

    let history = useHistory()

// not mine = material ui under
    const classes = useStyles();
    // const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        // setAge(e.target.value);
        console.log(e.target.value)
        return e.target.value
    };

    return (
        <div>
            {titles ?
                <>
                    <FormControl variant="outlined" className={classes.formControl} style={{ marginBottom: 30 }}>
                        <InputLabel id="demo-simple-select-outlined-label" placeholder="Theme">Theme</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // value={age}
                            onChange={handleChange}
                            placeholder="Theme"
                        >
                            {docs.map(item => (
                                <MenuItem value={item.title} onClick={handleChange === item.title ? getThemeId(item.id) : null}>{item.title}</MenuItem>
                            ))} 
                            {/* НУЖНО ЧТОБЫ СЕЛЕКТ ДОСТАВАЛ ID ВЫБРАННОГО THEME */}
                        </Select>
                    </FormControl>
                </>
                : <h1>Loading</h1>
            }
        </div>
    );
}
