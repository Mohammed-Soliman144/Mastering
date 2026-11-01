/* JS Variables */
/* 
    -- JS Datatypes:
        1- Primitive Datatypes
            -- String => let str = "Ahmed";
            -- Number => let num = 125; let decimal = 125.5894; (number includes integer and decimal and float)
            -- Boolean => let isGraduated = true | false;
            -- undefined => let amount; so amount is declared but not defined yet not assign any value to it
            -- null => let salary = null; null represent to nothing
            -- Symbol => used to create unique identifier id => let id = Symbol("unique_id")
                console.log(id) => Symbol("unique_id") 
                console.log(id.description) => "unique_id"
            -- BigInt => 900000454547878787n;
        2- Non-Primitive Datatypes
            -- Object => let obj = {name: "ahmed", age: 120}
            -- Array => let array = [10, 20, 30]
            -- Date => const date = new Date()
            -- regular expression: const emailReg = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ig;
            -- function (is first class object)

    -- JS execution Phases:
        1- Tokenization Phases (divide your code in tokens and check correct syntax to catch any syntax error)
        2- Parsing Phase => convert your human code to abstract syntax tree AST
        3- Interpreting Phase => convert human code to machine code (binary code 0 1)
        4- Code Generation Phase => execution

    -- JS Declaration Variable
        let|var|const variable_name = value

        let - const - var => specifiers (reserved keywords)
        var => is function scope can redeclared it and reassign it
        let => is block scope can reassign it but not can redeclared (TypeError)
        const => is block scope can not reassign it and can not redeclared and must assign value to it within declaration

    -- JS Variables convention naming
        1- can use any alphabit letters or digits as valid variable name
            const user1 = "Ahmed" (valid)
        2- can use special character as _ (underscore) or $ (dollar sign)
            let $ = 10; (valid)
            let _ = "Ahmed" (valid)
        3- Must name be express and clear the cause or purpose
        4- invalid variables names
            let 1user = "ahmed"; (in valid) can not start by digit in variable name
            let user-name = "ahmed"; (in valid) can not use dash or hyphen -
            let class = "flex"; (in valid) can not use reserved keywords as class
        5- use camelCase in name convention of js variables userName
        6- variables names are case sensitive in js
            let myUser = "ahmed"; (valid)
            let MyUser = "hassan"; (valid)
    -- difference between stack, queue, deque, heap, priorty heap in memory
    -- difference between primitive (pass by value) and non primitive datatypes (pass by reference) and example

*/

