interface Idata {
    name: string;
    age: number;
    isActive: boolean;
    address: {
        city: string,
        state: string,
        pincode:number
    };
    hobbies: string[];
    ca: () => boolean;
}

interface Iaddress {
    city: string,
    state: string,
    pincode:number
}


const data:Idata = {
    name : "Aj",
    age:23,
    isActive:true,
    address : {
        city:"Muz",
        state:"Bihar",
        pincode:843109
    },
    hobbies: ['cricket', 'football', 'swimming'],
    ca: ()=>{
        return true
    }
}

