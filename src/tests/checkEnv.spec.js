const {test, expect} = require('@playwright/test')



test("Check Env" , async function({page}){

    console. log(process.env. NODE_ENV);
    console. log(process . env. userid) ;
    console. log( process . env. password) ;


})