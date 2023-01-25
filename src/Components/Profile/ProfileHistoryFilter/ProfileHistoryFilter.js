function ProfileHistoryFilter(props){
    
    let loading = props.loading;
    if(loading){
        return (<></>)
    }
    let arr = props.arr;
    let name = props.name;
    let index = -1;


    
    //find first user with name = props.user
    for (let i = 0; i<arr.length; i++){
        if(arr[i].username === name){
            index = i

            break;
        }
    }
    if(index ===-1){
        return (<>
        </>)
    }
    const translations = arr[index].translations


    
    
    return(
        <div>
            <ul>
                {translations.map((item,index)=><li key={index}>{item}</li>)}
            </ul>



            
        </div>

    );
}
export default ProfileHistoryFilter;