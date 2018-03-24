// in src/institutes.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const InstituteList = (props) => (
    <List title="Institutes" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
