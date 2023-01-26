import "./TranslateInputBox.css"
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { postNewTranslationAsync, setInput } from "../../../redux/translationInputSlice";

const TranslateInputBox = (props)=>{
    const [localInput, setLocalInput] = useState("")
    const index = useSelector((state) => state.userName.index)
    const dispatch = useDispatch();
    


    const handleOnChange = (e)=>{
        setLocalInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        console.log(localInput,index);
        dispatch(postNewTranslationAsync({index: index+1,arr: []}))
        dispatch(setInput(localInput));
        


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