import React from 'react';
import AdminAddTheme from './AdminAddTheme';
import classes from './Admin.module.css';

import Test1 from '../../containers/Docs/AllDocumentation/Test1';

const Admin = () => {

    return (
        <div className={classes.adminPanel}>

            <AdminAddTheme />

            <Test1 />
            
        </div>
    );
};

export default Admin;

