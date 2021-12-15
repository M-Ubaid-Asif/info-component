import React from 'react'
import { Chip,Stack } from '@mui/material'



const Infocomponent = () => {
    
    
    return (
        <div style={{width:'20%',height:"750px",marginLeft:"80%",border:"2px solid red"}}>
            <div style={{backgroundColor:'skyblue'}}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/1000/svg" style={{width:"100%",height:"10rem"}}><title/><g id="about"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></g></svg>
            
            </div>
            {/* <Stack> */}

                <span>user</span>
                <i class="fas fa-pen"></i>
            {/* </Stack> */}
        </div>
    )
}


export default Infocomponent
