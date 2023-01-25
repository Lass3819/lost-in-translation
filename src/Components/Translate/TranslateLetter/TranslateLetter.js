import "./TranslateLetter.css"

const TranslateLetter = (props)=>{
    
    let path = `./resources/individual-signs/${props.letter}.png`
    if(props.letter===" "){
        path = `./resources/individual-signs/Empty.png`
    }
    return (
        <div>
            <img alt="" src={path}/>
        
        </div>
    );

}
export default TranslateLetter;



