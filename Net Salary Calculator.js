// My Basic Salary will be KES 500000 while the Benefits: NHIF and NSSF will be KES1700 and KES30000 respectively. 
let grossSalary = 500000;

// Calculating PAYE

let PAYE = 150000;

    if (grossSalary<24000) {
        console.log(PAYE = 2400);
    }

    else if (grossSalary>24001 && grossSalary<=32333) {
        console.log(PAYE = 8083.25);
    }

    else if (grossSalary>32334 && grossSalary<=500000) {
        console.log( PAYE = 150000);
    }

    else if (grossSalary>500001 && grossSalary<=800000) {
        console.log( PAYE = 260000);
    }

    else {
        console.log( tax = 35.0);
    }

// Calculating NHIF Deductions

let NHIF = 1700;

    if (grossSalary<5999) {
        console.log(deduction = 150);
    }

    else if (grossSalary>6000 && grossSalary<=7999) {
        console.log(deduction = 300);
    }

    else if (grossSalary>8000 && grossSalary<=11999) {
        console.log(deduction =400);
    }

    else if (grossSalary>12000 && grossSalary<=14999) {
        console.log(deduction = 500);
    }

    else if (grossSalary>15000 && grossSalary<=19999) {
        console.log(deduction = 600);
    }

    else if (grossSalary>20000 && grossSalary<=24999) {
        console.log(deduction = 750);
    }

    else if (grossSalary>25000 && grossSalary<=29999) {
        console.log(deduction = 850);
    }

    else if (grossSalary>30000 && grossSalary<=34999) {
        console.log(deduction = 900);
    }

    else if (grossSalary>35000 && grossSalary<=39999) {
        console.log(deduction = 950);
    }

    else if (grossSalary>40000 && grossSalary<=44999) {
        console.log(deduction = 1000);
    }

    else if (grossSalary>45000 && grossSalary<=49999) {
        console.log(deduction = 1100);
    }

    else if (grossSalary>50000 && grossSalary<=59999) {
        console.log(deduction = 1200);
    }

    else if (grossSalary>60000 && grossSalary<=69999) {
        console.log(deduction = 1300);
    }

    else if (grossSalary>70000 && grossSalary<=79999) {
        console.log(deduction = 1400);
    }

    else if (grossSalary>80000 && grossSalary<=89999) {
        console.log(deduction = 1500);
    }

    else if (grossSalary>90000 && grossSalary<=99999) {
        console.log(deduction = 1600);
    }

    else {
        console.log(deduction = 1700);
    }

    // Calculating NSSF. 
    // Let a be grossSalary , b be 0.06 so that we can calculate how much the employee will pay NSSF

    let NSSF = 30000;

    let a = 500000;
    let b = 0.06;
    console.log(b*a);
    
    // Lastly, we will be calculating the net Salary
    // Net Salary = gross Salary - (PAYE+NHIF+NSSF)

    console.log(grossSalary - (PAYE+NHIF+NSSF));
    