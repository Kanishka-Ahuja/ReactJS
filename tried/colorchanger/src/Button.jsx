import './index.css'
function Button({Color,setColor}){

    console.log("working")
    return(
        <button onClick={()=>setColor(Color)}className='px-4 outline-none py-1 rounded-full text-white' style={{backgroundColor:Color}}>
            {Color}
        </button>
    )
}

export default Button