let express = require('express')

let app = express()

let port = process.env.port || 5000

const cors = require('cors')

app.use(cors())


app.use(express.json())

let user = [
    {
        id: 1, name: "mahedi", age: "17", class: "10",

    },
    {
        id: 2, name: "mahedi", age: "17", class: "10",

    },
    {
        id: 3, name: "mahedi", age: "17", class: "10",

    },
    {
        id: 4, name: "mahedi", age: "17", class: "10",

    },
    {
        id: 5, name: "mahedi", age: "17", class: "10",

    },

]



app.get('/', (req, res) => {
    res.send('Hello World!')
})
// here is file sending

app.get('/user', (req, res) => {
    res.send(user)
})

// here is post 

app.post('/user', (req, res) => {
    res.send(user.body)

    const newUser = req.body;
    console.log(newUser);
    newUser.id = user.length + 1

    user.push(newUser)

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})