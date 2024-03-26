
try {

    let undefinedObject = undefined; 
    let propertyValue = undefinedObject.someProperty; 
    console.log("The value of property is ", propertyValue); 

}
 catch (error) {

    if (error instanceof TypeError) {
        console.log("Caught a TypeError ", error.message); 
        let defaultValue = "Default Value"; 
        console.log("Using default value ", defaultValue); 
    }
     else 
     {
        throw error; 
    }
}
