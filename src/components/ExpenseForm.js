import ExpenseNewform from "./ExpenseNewform";


const ExpenseForm=(props)=>{

const saveExpenseDatahandler=(enteredExpenseData)=>{
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData)
}
    return (
        <div>
        <ExpenseNewform onSaveExpenseData={saveExpenseDatahandler}/>
        </div>
    )
}

export  default ExpenseForm;