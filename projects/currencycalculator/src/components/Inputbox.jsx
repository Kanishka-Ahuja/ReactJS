
const InputBox = ({labelValue,amount,iswritable})=>{

    return(
        <>
        <div className="flex bg-slate-300">
            <div className="">
                <label className=''>{labelValue}</label>
                <input type='text' value={amount} />
            </div>
            <div>
                <label>Currency</label>
                <select>
                    <option>usd</option>
                </select>
            </div>
        </div>
        </>
    )
}

export default InputBox