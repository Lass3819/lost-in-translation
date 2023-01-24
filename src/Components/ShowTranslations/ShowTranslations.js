import "./ShowTranslations.css";

import TranslateLetter from "../TranslateLetter/TranslateLetter";




const ShowTranslations = (props)=>{
    //convert props.inputString to an array of lower case letters.
    const stringArr = props.inputString.toLowerCase().split("")

    //stop adding more letters if translation will go out of screen
    if(stringArr.length>1000){
        stringArr.splice(1000,stringArr.length-1000);
    }
    //sanitize the translation input
    const sanitizedStringArr = []

    for (let letter of stringArr){
        if(letter.match(/[a-z]/i)){
            sanitizedStringArr.push(letter);
        } else if(letter===" "){
            sanitizedStringArr.push(letter);
        }
    }

    




    return (
        <div className="bigger-container">
            
            <div className="container">
                {sanitizedStringArr.map((letter,index)=><TranslateLetter key={index} letter={letter}/>)}
                
                            
            </div>
                


        </div>
);
}

export default ShowTranslations;