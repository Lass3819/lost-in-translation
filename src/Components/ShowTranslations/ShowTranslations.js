import "./ShowTranslations.css";

import TranslateLetter from "../TranslateLetter/TranslateLetter";




const ShowTranslations = (props)=>{

    const stringArr = props.inputString.split(" ")
    const toDisplay = [];
    for (let word of stringArr){
        for (let letter of word){
            toDisplay.push(<TranslateLetter letter={letter}/>)


        }
    }
    




    return (
        <div className="bigger-container">
            
            <div className="container">
                {toDisplay}
                
                            
            </div>
                


        </div>
);
}

export default ShowTranslations;