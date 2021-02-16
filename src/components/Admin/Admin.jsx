import { Button } from '@material-ui/core';
import React from 'react';
import AdminAddTheme from './AdminAddTheme';
import AdminAddTopics from './AdminAddTopics';

const Admin = () => {
    return (
        <div>
            <Button type="submit" variant="contained" >
                Add theme
            </Button>
            <Button type="submit" variant="contained" >
                Add topic
            </Button>
            <AdminAddTheme />
            <AdminAddTopics />
        </div>
    );
};

export default Admin;


// className={classes.adminBtn}