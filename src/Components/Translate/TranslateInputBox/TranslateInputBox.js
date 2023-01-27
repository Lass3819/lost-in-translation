import "./TranslateInputBox.css"
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { postNewTranslationAsync, setInput } from "../../../redux/translationInputSlice";
import { addTranslation } from "../../../redux/translationSlice";

const TranslateInputBox = (props)=>{
    const [localInput, setLocalInput] = useState("")
    const index = useSelector((state) => state.userName.index)
    const currentTranslations = useSelector((state)=>state.translation.translations)
    const dispatch = useDispatch();
    


    const handleOnChange = (e)=>{
        setLocalInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(setInput(localInput));
        dispatch(addTranslation(localInput))
        let newTranslations = [...currentTranslations, localInput]
        dispatch(postNewTranslationAsync({index: index+1,arr: newTranslations}))
        
        


    }
    return (
        <div className="input">
            <form className="input-form" onSubmit={handleSubmit}>
                <input className="input-field" placeholder={props.defaultValue} value={localInput} type="text" onChange={handleOnChange}/>
                <button className="input-button" type="submit">Submit</button>
            </form>
                    
                
        </div>
    );
}
export default TranslateInputBox;