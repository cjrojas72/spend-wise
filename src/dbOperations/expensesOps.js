import { collection, addDoc } from "firebase/firestore"; 
import { refUser } from "../layouts/dashboard-layout";
import { toast } from "react-toastify";
import { db } from "../hooks/useFbData";
import { Timestamp } from "firebase/firestore";


function addExpense(description, amount, category){ 
  
  let date = Timestamp.now();
  let createdBy = refUser;

  //console.log(db);

  if(description, amount, category){
    try{
      addDoc(collection(db, 'expenses'), {
      createdBy,
      description,
      amount,
      category,
      createdBy,
      date

    })

    toast("Expense Added");
  } catch(err) {
    console.log(err);
    toast.error("An error has occured");
  }
}

console.log("addExpense for ", createdBy);
  
}


export { addExpense }