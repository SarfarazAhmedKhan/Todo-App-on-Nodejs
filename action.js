const figlet=require('figlet');

function Figlet(value){
    console.log(figlet.textSync(value))
}

module.exports={
    Figlet
}