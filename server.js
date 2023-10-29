const express = require('express');
const app = express();
const pg = require('pg-promise')();
const db = pg("postgres://corcoding@localhost:5432/corcoding");
app.use(express.json())

app.get('/',async(req,res) => {
    let accounts = await db.any('SELECT * FROM accounts') //question on any, none, many
    res.send(accounts);
})

app.post('/friends', async(req,res)=> {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
   let postaccounts =  await db.none("INSERT INTO accounts(firstName, lastName) VALUES($1, $2)", [firstName, lastName]);

   res.send(postaccounts)

})

app.listen(3000, () => {
    console.log('Server is running at port 3000');
})
