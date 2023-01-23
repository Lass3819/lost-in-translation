import "./ShowTranslations.css";

import TranslateLetter from "../TranslateLetter/TranslateLetter";




const ShowTranslations = (props)=>{


    const test = [<TranslateLetter letter="a"/>,<TranslateLetter letter="b"/>];




    return (
        <div className="bigger-container">
            
            <div className="container">
                {test}
                
                            
            </div>
                


        </div>
);
}

export default ShowTranslations;