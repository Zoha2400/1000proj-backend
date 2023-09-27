const express = require('express');
const app = express();
const PORT = 3000;


//basic local data
const projects = [
    {id: 1, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 2, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 3, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 4, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 5, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 6, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 7, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 8, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 9, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 10, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 11, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 12, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
    {id: 13, area: '21x23', acres: '6', style: 'newModern', cons: '7.000.000', data:'smth!'},
]

app.get('/api/get_all', (req, res) => {
    res.json(projects);
})

app.listen(PORT, () => {
    console.log('Listening on ' ,PORT);
})