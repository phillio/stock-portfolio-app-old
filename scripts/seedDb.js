const { User } = require('../models');
require('dotenv').config()
const saltRounds = process.env.SALT_ROUNDS
const passwordEnv = process.env['SECRET']
const bcrypt = require('bcrypt');



const seedDb = async () => {
    try {
        await User.destroy({
            where: {}
        });

        const encryptedPassword = async password => {
            const encrypted = await bcrypt.hash(
                password, 
                saltRounds, 
                function(err, hash) {
            });
            return encrypted;
        }
        // await User.create({
        //     name: 'Burger Lover',
        //     email: 'burgerburger@gmail.com',
        //     password: encryptedPassword(passwordEnv)
        // })

        

        // const encryptedPassword = async (password) => {
        //     const encrypted = await bcrypt.hash(
        //         'password', 
        //         Number(process.env.SALT_ROUNDS)
        //     )
        //     return encrypted;
        // }

        // const encryptedPassword1 = await bcrypt.hash(
        //     'password', 
        //     12
        //     )
        // const encryptedPassword2 = await bcrypt.hash(
        //     'password', 
        //     12
        //     )





        await User.create({
            name: 'tester',
            email: 'tester@gmail.com',
            password: 'tester'
        })

        // await User.create({
        //     name: 'Burger Lover',
        //     email: 'burgerburger@gmail.com',
        //     password: 'burgerburger'
        // })

        // await User.create({
        //     name: 'Pasta Face',
        //     email: 'pastapasta@gmail.com',
        //     password: 'pastapasta'
        // })

        // await User.create({
        //     name: 'Sandwich Smeller',
        //     email: 'sandwich@gmail.com',
        //     password: 'sandwich'
        // })





        // await User.create({
        //     name: 'Taco Eater',
        //     email: 'tacotaco@gmail.com',
        //     password: encryptedPassword('taco123')
        // })

        // await User.create({
        //     name: 'Burger Lover',
        //     email: 'burgerburger@gmail.com',
        //     password: encryptedPassword('burger123')
        // })




        // const encryptedPassword1 = await bcrypt.hash(
        //     'password',
        //     12
        // )

        // const encryptedPassword2 = await bcrypt.hash(
        //     'password',
        //     12
        // )

        // await User.create({
        //     name: 'Taco Eater',
        //     email: 'tacotaco@gmail.com',
        //     password: encryptedPassword1
        // })

        // await User.create({
        //     name: 'Burger Lover',
        //     email: 'burgerburger@gmail.com',
        //     password: encryptedPassword2
        // })




        
    } catch (e) {
        console.error(e)
    }
    // finally {
    //     process.exit();
    // }
}

const run = async() => {
    try {
        await seedDb()
    } catch (e) {
        console.error(e)
    } finally {
        process.exit();
    }
}

run();