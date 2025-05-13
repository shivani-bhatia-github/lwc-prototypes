/*
 * Module in es6 Says any JS file can become a module provided it implements 3 steps:
 */
 
// 1. IMPORTING ALL DEPENDENCIES [OPTIONAL]
 
// 2. HAVING THE ACTUAL BUSINESS LOGIC

 //In a Module the business logic can be a fuction,  variable or  class
 function deliver(vehicle) {
    return vehicle + ' is ready for delivery';
 }

 function pickup(vehicle) {
    return vehicle + ' is ready for pickup';
 }


 function service(vehicle) {
    return vehicle + ' is ready for service';
 }


 function repair(vehicle) {
    return vehicle + ' is ready for repair';
 }




 
 // 3. EXPORT THE BUSINESS LOGIC

 //Every module can have only one default export
 export default deliver;
 //However it can have multple named exports
 export {pickup, service,  repair}

 // Export variable
 export const DELIVERY_DURATION = 60;

/** 
 * TO RUN A USE THIS COMMAND IN THE MODULE FOLDER -   npx serve    
 *
 */