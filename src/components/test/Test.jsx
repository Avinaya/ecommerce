import React,{ useState } from 'react'

function Test() {

const[appState,changeState]=useState({
    activeObject:null,
    initialState:" avi",
    objects:[{id:1},{id:2},{id:3}]
})

const[initial,setInitial] = useState(" avi")
function toggleActive(index){
    setInitial('')
    changeState({...appState,activeObject: appState.objects[index]})
}

function toggleActiveStyle(index){
    if(appState.objects[index] ===  appState.activeObject){
        return "box active"
    }else{
        return "box inactive"
    }
}



    return (
        <div className="test">
        <div
        className={toggleActiveStyle(1)+initial}
        onClick={()=>{toggleActive(1)}}>one</div>

        <div
        className={toggleActiveStyle(2)}
        onClick={()=>{toggleActive(2)}}>one</div>

        <div 
        className={toggleActiveStyle(3)}
        onClick={()=>{toggleActive(3)}}
        >one</div>

        
            
        </div>
    )
}

export default Test
