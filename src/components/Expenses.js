
import react,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter"
import "./Expenses.css";

const Expenses=(props)=>{
 const[filteredYear,setFilteredYear]=useState('2020')

 const filterChangehandler=selectedYear=>{
  setFilteredYear(selectedYear);
 };

  return (
    <div className='expenses'>

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangehandler}/>
      {props.expenses.map((expense,index)=>{
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          ></ExpenseItem>
      )
      })}
    </div>
  )
}

export default Expenses;