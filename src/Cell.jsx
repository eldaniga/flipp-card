

import { useState } from "react";


let bufferCard2 = [];
let flippedCard2 = 0;


function areIquals (pepe){
    if(pepe[0][1] == pepe[1][1]){
        //console.log("BUFFER[0][1]" + bufferCard2[0][1])
        console.log("Iguales")

    }else{
        //do something here
        //event.target.classList.add("hidden")
        console.log("No Iguales")
        //setCounter(true)
    }
}

export const Cell = ({children,id, dataid,revealCard})=>{

    const [flippedCard, setFlippedCard] = useState(0);
    
    const [bufferCard, setBufferCard] = useState([]);
    

    const [counter, setCounter] = useState(false);
    const [isBack, setIsBack] = useState(true);
    

    
    const frontCardClassName = isBack ? "cell-card-front": "cell-card-back"
    const backCardClassName = isBack ? "cell-card-back": "cell-card-front"

    return (
        <div className="cell-container cell-container-voltear" dataid = {dataid} id={id} onClick={ (event)=>{
        
        
        if(!counter){   // aqui counter sigue siendo false
            setIsBack(false)    //por tanto esto si cambia a false, cambiando los valores de las clases

        }else{
            setIsBack(true)
        }

        if(flippedCard2<2){
            
            bufferCard2.push([id, dataid])
            //console.log("BUFFERCARD2: " + bufferCard2)
            //setBufferCard(bufferCard2)
            //console.log(flippedCard2)
            if(flippedCard2 == 1){
                areIquals(bufferCard2)
            }

            ++flippedCard2;
            //setFlippedCard(flippedCard2)

        }
            
        
        
       
      
       

        
            
        


    }
        }>
            <div className="cell-card cell-card-voltear">
                <div className={frontCardClassName}>
                    {children}
                 </div>

                 <div className={backCardClassName}>
                    
                    

                </div>

            </div>
           
        </div>
    )


}