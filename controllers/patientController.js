const hospitals = require("../services/db/hospitalsDB.js");


const calcWaitingTime=(painLevel,elementList)=>{

   return elementList.reduce((acc, hospital) => {
        const foundItem = hospital.waitingList.find(item => item.painLevel === painLevel);
        if(foundItem){
           const  {patientCount,avgProcessTime } = foundItem
            acc.push({
                waitTime: patientCount * avgProcessTime, //check variable types
                name: hospital.name
            })
        }
        return acc
    }, [])

}

 //console.log(calcWaitingTime(2,hospitals));




 module.exports={
    calcWaitingTime
 }