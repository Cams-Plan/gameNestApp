// console.log(process.env.PROJECT_ENV) //use this to double check the .env file that is  being loaded
const app = require('./app')
const port = process.env.PORT || 5000

app.listen(port, () => {
    try {
        console.log(`GameNest API running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})


// in dev you need to stop and restart nodemon to see the effect of changes made to the dotenvx config in the package.json script
