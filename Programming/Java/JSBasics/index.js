let address ={
    street : 'streetname',
    city : 'cityname',
    zipCode : 7441
}
function showaddress (address){
    for (let key in address){
        console.log(key, address[key]);
    }
}