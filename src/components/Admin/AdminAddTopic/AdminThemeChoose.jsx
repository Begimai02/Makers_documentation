import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { docsContext } from '../../../contexts/DocsContext';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: theme.spacing(0),
        // maxWidth: "900px",
        // width: "100%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AdminThemeChoose() {

    const { docs, getDocs, getoneObjTheme, pushTheme, addNewTopic } = useContext(docsContext);
    const [titles, setTitles] = useState(docs);
    // console.log(docs)

    useEffect(() => {
        getDocs()
        setTitles(docs)
        // console.log(titles)
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

    function gettingThemeId(id) {
        addNewTopic(id);
        pushTheme(id);
    }

    return (
        <div>
            {titles ?
                <>
                    <FormControl variant="outlined" fullWidth={true} className={classes.formControl} style={{ marginBottom: 30 }}>
                        <InputLabel id="demo-simple-select-outlined-label" placeholder="Theme">Theme</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // id="demo-customized-select-outlined"
                            // value={age}
                            onChange={handleChange}
                            placeholder="Theme"
                            defaultValue=""
                        >
                            {/* <MenuItem value="">
                                <em>None</em>
                            </MenuItem> */}
                            {docs.map((item, index) => (
                                <MenuItem
                                    key={index + "SelectTheme"}
                                    value={item.title}
                                    onClick={() => gettingThemeId(item.id)}
                                >
                                    {item.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </>
                : <h1>Loading</h1>
            }
        </div>
    );
}


// handleChange === item.title ? getoneObjTheme(item.id) : null

// onClick={() => pushTheme(item.id)