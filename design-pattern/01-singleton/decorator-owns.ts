function functionDescorator(){
    console.log("f():evaluated")
    return function (target,propertyKey:string,desciptor:PropertyDescriptor){
        console.log("f():called")
    }
}


function classDecorator(constructor:Function){
   
}
