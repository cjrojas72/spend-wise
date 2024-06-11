
import PageTitle from "../components/page-title/page-title";
import Header from "../components/header/header";
import MUIDataTable from "../components/data-table/data-table";
import { Card, Button, CircularProgress } from "@mui/material";
import DashboardGridLayout from "../components/dashboard-layout/dashboard-layout";
import MUIModal from "../components/mui-modal/mui-modal";
import { useState, useEffect } from "react";
import data from '../test-data/test-data.json';
import AddExpenseForm from "../components/forms/add-expense-form/add-expense-form";


export default function ExpensesPage() {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalContent, setModalContent] = useState(null);
      const [expenses, setExpenses] = useState([]);
      const [isDataLoading, setIsDataLoading] = useState(true);

      
    useEffect(() => {
        const fetchData = async () => {
        try {
        // Simulate async data fetching with a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setExpenses(data.expenses); // Set the JSON data into state
            //console.log(data.expenses);
            setIsDataLoading(false);
        } catch (error) {
        console.error('Error fetching data:', error);
        setIsDataLoading(false);
        }
    };

    fetchData(); 
  }, []); 

      const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
        
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };


      const passFunc = () =>{
        console.log("I am from parent");
      }

      let modalProps = {
        isOpen: {isModalOpen},
        onClose: handleCloseModal,
        title: "Modal Title",
        content: {modalContent},
        showToast: true,
        toastMsg: "Expense added",
        btntext: 'Add',
        btncolor: 'primary',
        btnvariant: 'contained',
        btncommand: passFunc,
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
        {isDataLoading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                      <MUIDataTable  
                        headers={["Description", "Amount", "Date", "Category"]} 
                        data={expenses} 
                        columns ={["description", "amount", "date", "category"]}/>
        )}
            
        </Card>
      </DashboardGridLayout>


      <MUIModal 
        isOpen= {isModalOpen}
        onClose= {handleCloseModal}
        title= "Add Expense"
        content= {modalContent}
        showToast= {true}
        toastMsg= "Expense added"
        btnText='Add'
        btnColor= 'primary'
        btnVariant= 'contained'
        btnCommand= {passFunc}
      />
      
    </>
  );
}