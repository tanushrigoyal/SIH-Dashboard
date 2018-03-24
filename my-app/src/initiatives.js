// in src/initiatives.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const InitiativeList = (props) => (
    <List title="Initiatives" {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

const InitiativeTitle = ({ record }) => {
    return <span>Initiative {record ? `"${record.title}"` : ''}</span>;
};

export const InitiativeEdit = (props) => (
    <Edit title={<InitiativeTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="User" source="userId" reference="users" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const InitiativeCreate = (props) => (
    <Create title="Create Initiative" {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" validate={required} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);
