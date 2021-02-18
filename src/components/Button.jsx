import React from "react";
import classNames from "classnames";    



const Button=({onClick,className,outline,children})=>
 {
    

    return(
        <button 
         onClick={onClick}
        className={classNames(
            'button',//всегда добавляет button
            className, // пропс добавляющий тот класснейм,что написали
            {
            'button--outline': outline,// если outline=true ,то +button--outline
        }
    
        )}>
            {children}</button>
    
    );

}

export default Button