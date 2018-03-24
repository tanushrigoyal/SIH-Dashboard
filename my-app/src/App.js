// in src/App.js
import React from 'react';
import InitiativeIcon from 'material-ui/svg-icons/action/book';
import Dashboard from './Dashboard';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import { InitiativeList, InitiativeEdit, InitiativeCreate } from './initiatives';
import { InstituteList } from './institutes';
import { SchemeList } from './schemes';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')} title="Admin Dashboard" dashboard={Dashboard}>
        <Resource name="posts" options={{ label: 'Initiatives' }} list={InitiativeList} edit={InitiativeEdit} create={InitiativeCreate} remove={Delete} icon={InitiativeIcon} />
        <Resource name="users" options={{ label: 'Institutes' }} list={InstituteList} />
        <Resource name="comments" options={{ label: 'Schemes' }} list={SchemeList} />
    </Admin>
);

export default App;
