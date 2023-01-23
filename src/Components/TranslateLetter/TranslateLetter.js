const TranslateLetter = (props)=>{
    const path = `./resources/individual-signs/${props.letter}.png`
    return (
        <div>
            <img alt="" src={path}/>   
        </div>
    );

}
export default TranslateLetter;



