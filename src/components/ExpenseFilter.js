import "./ExpenseForm.css"

const ExpenseFilter=(props)=>{
    const dropdownChangehandler=(event)=>{
        props.onChangeFilter(event.target.value)
    }

    return (

        <div>
            <label className="card-content">filter by year</label>
            <select value={props.selected} onChange={dropdownChangehandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;