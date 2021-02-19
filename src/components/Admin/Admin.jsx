import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import AdminAddTheme from './AdminAddTheme';
import AdminAddTopics from './AdminAddTopic/AdminAddTopics';
import AdminDocs from './AdminDocs';
import classes from './Admin.module.css';

import Test1 from '../../containers/Docs/AllDocumentation/Test1';

const Admin = () => {
    const [theme, setTheme] = useState(false);
    const [topic, setTopic] = useState(false);

    const themeClick = () => setTheme(!theme)
    const topicClick = () => setTopic(!topic)

    function handleSave(){
        setTopic(!topic)
    }

    return (
        <div className={classes.adminPanel}>

            <Button type="submit" variant="contained" onClick={themeClick} className={classes.adminPanelBtn} className={classes.btn1}>
                Add theme
            </Button>
            <Button type="submit" variant="contained" onClick={topicClick} className={classes.adminPanelBtn}>
                Add topic
            </Button>

            <AdminDocs />   {/* for all theme and topics */}

            {theme ? <AdminAddTheme /> : null}
            {topic ? <AdminAddTopics handleSave={handleSave} /> : null}

            <Test1 />
            
        </div>
    );
};

export default Admin;

