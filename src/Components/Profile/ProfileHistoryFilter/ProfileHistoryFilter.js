function ProfileHistoryFilter(props){
    let truncatedArr = props.arr.slice(Math.max(props.arr.length - 10, 0))
 

    return(
        


        <div>
            <ul>
            {truncatedArr.map((elm,key)=>{return <li key={key}>{elm}</li>})}
                
            </ul>



            
        </div>

    );
}
export default ProfileHistoryFilter;