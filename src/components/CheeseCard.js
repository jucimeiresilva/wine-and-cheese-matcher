import React from "react";

const CheeseCard = ({cheeseName}) => {
    return (
       
             <div class="card" style={{height: '300px'}}>
             <img src="./image/cheese.png" class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">{cheeseName}</h5>
        </div>
        </div>
    
    );

};

export default CheeseCard;