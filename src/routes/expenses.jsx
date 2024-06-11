
import PageTitle from "../components/page-title/page-title";
import Header from "../components/header/header";
import MUIDataTable from "../components/data-table/data-table";
import { Card, Button } from "@mui/material";
import DashboardGridLayout from "../components/dashboard-layout/dashboard-layout";
import MUIModal from "../components/mui-modal/mui-modal";
import { useState, useEffect } from "react";
import DynamicForm from "../components/dynamic-form/dynamic-form";
import data from '../test-data/test-data.json';
import AddExpenseForm from "../components/forms/add-expense-form/add-expense-form";


export default function ExpensesPage() {

    
    //console.log(data.expenses);

      const addExpenseFormFields = [
        { name: 'description', label: 'Description', type: 'text', required: true },
        { name: 'amount', label: 'Amount', type: 'number', required: true },
        { name: 'category', label: 'Category', type: 'text', required: true }
      ];


      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalContent, setModalContent] = useState(null);
      const [expenses, setExpenses] = useState(null);

      
    useEffect(() => {
        const fetchData = async () => {
        try {
        // Simulate async data fetching with a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setExpenses(data.expenses); // Set the JSON data into state
            console.log(data.expenses);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    fetchData(); // Call the async function
  }, []); 

      const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const handleFormSubmit =(data) =>{
        console.log(data);
      }

      



  return (
    <>
        <div>
            <Header />
        </div>
      
      <DashboardGridLayout>
        <div className="flex justify-between items-center p-4 mb-3">
            <PageTitle title="My Expenses" />
            <div>
            <Button
                variant="contained"
                onClick={() => handleOpenModal(
                    <AddExpenseForm />
                )}
            >
                Add Expense
            </Button>
            </div>
            
        </div>
        
        <Card>
            <MUIDataTable  
                headers={["Description", "Amount", "Date", "Category"]} 
                data={expenses} 
                columns ={["description", "amount", "date", "category"]}/>
        </Card>
      </DashboardGridLayout>

      <MUIModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        title="Add Expense"  
        content={modalContent}
        buttonText="Add"
        showToast={true}
        toastMsg="Expense Added"
        />
      
    </>
  );
}