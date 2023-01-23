import "./TranslateInputBox.css"
import {useDispatch} from "react-redux";
import { useState } from "react";
import { setInput } from "../../redux/translationInputSlice";

const TranslateInputBox = (props)=>{
    const [localInput, setLocalInput] = useState("")
    
    const dispatch = useDispatch();
    


    const handleOnChange = (e)=>{
        setLocalInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
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