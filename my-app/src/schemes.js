// in src/schemes.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const SchemeList = (props) => (
    <List title="Schemes" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
