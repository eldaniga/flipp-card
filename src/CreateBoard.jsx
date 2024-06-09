import { Cell } from "./Cell";

import { imageNames } from "./Constants";



export const CreateBoard = (spaceBoard)=> {
    //probability of 0.3 for 
    

    const cells = [];
    const counters = {"0": 0 , "1": 0, "2": 0, "3":0, "4":0, "5":0}
    for (let i = 0; i < spaceBoard; i++) {
        
        let numberOfPhoto = Math.floor(Math.random()*6)
        while(counters[numberOfPhoto.toString()] >= 6){
            numberOfPhoto = Math.floor(Math.random()*6)
        }
        const numberString= numberOfPhoto.toString();
        const srcImg = `./src/assets/${imageNames[numberOfPhoto]}.png`
        cells.push(

        <Cell key={i}  id={i} dataid={numberOfPhoto}>
            <img src={srcImg} alt="" />
            
        </Cell>);


        console.log("Counters: " + counters["1"])
        counters[numberString] +=1;
        //console.log(numberofPhoto)
        
        

        
      }

    return cells;

}
   





  