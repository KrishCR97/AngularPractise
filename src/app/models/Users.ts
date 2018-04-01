export interface Users {
    name : String
    age? : number
    lname : String
    address? : {
        street? : String,
        city? : String,
        state? : String
    }
    hide? : boolean
}