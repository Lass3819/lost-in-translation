function ProfileHistoryFilter(props){   


    return(
        


        <div>
            <ul>
            {props.arr.map((elm,key)=>{return <li key={key}>{elm}</li>})}
                
            </ul>



            
        </div>

    );
}
export default ProfileHistoryFilter;