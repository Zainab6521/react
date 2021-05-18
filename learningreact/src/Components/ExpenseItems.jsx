import './ExpenseItems.css'

function ExpenseItems(){
    const expenseDate = new Date(2021,5,18);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 172.67;
}
return(
    <div className='expense-item'>
        <div>{expenseDate.toISOstring()}</div>
        <div className='expense-item_descriptiion'>
            <h2>{ExpenseTitle}</h2>
            <div className='expense-item_price'>${expenseAmount}</div>
        </div>
    </div>
)
export default ExpenseItems;