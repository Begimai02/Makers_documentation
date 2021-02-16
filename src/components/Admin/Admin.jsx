import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import AdminAddTheme from './AdminAddTheme';
import AdminAddTopics from './AdminAddTopics';
import AdminDocs from './AdminDocs';

const Admin = () => {
    const [theme, setTheme] = useState(false);
    const [topic, setTopic] = useState(false);

    const themeClick = () => setTheme(!theme)
    const topicClick = () => setTopic(!topic)

    return (
        <div>

            <Button type="submit" variant="contained" onClick={themeClick}>
                Add theme
            </Button>
            <Button type="submit" variant="contained" onClick={topicClick}>
                Add topic
            </Button>
            <AdminDocs />   {/* for all theme and topics */}

            {theme ? <AdminAddTheme /> : null}
            {topic ? <AdminAddTopics /> : null}
            
        </div>
    );
};

export default Admin;

