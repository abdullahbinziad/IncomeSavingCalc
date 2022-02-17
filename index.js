
//get expense value and find the total expense

const calculate= document.getElementById('calc-btn').addEventListener('click' , function(){
    const foodPrice = parseFloat( document.getElementById('food-price').value);
    const rentPrice = parseFloat( document.getElementById('rent-price').value);
    const clothPrice =parseFloat( document.getElementById('clothes-price').value);

    const totalExpenses = document.getElementById('total-expenses').innerText=foodPrice + rentPrice +clothPrice;


    //get income balance and minas it from the Total expenses
    const income = parseFloat( document.getElementById('income-input').value);
    const presentBalance = parseFloat( income - totalExpenses ) ;
    document.getElementById('balance-select').innerText = presentBalance;



    // saving button handler
    const savingBtn = document.getElementById('save-btn').addEventListener('click' , function(){
        const presentBalance = parseFloat( income - totalExpenses ) ;
        const getSavingAmount = parseFloat( (document.getElementById('save-input').value / 100 ) * presentBalance);
         document.getElementById('saving-value').innerText = getSavingAmount; 
         document.getElementById('remaingBl').innerText = presentBalance - getSavingAmount ;
         
    })

})


