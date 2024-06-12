
import PageTitle from "../components/page-title/page-title";
import Header from "../components/header/header";
import MUIDataTable from "../components/data-table/data-table";
import { Card, Button, CircularProgress } from "@mui/material";
import DashboardGridLayout from "../components/dashboard-layout/dashboard-layout";
import MUIModal from "../components/mui-modal/mui-modal";
import { useState, useEffect } from "react";
// import data from '../test-data/test-data.json';
import AddExpenseForm from "../components/forms/add-expense-form/add-expense-form";
import { useDetails } from "../hooks/useFbData";
import { refUser } from "../layouts/dashboard-layout";


export default function ExpensesPage() {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalContent, setModalContent] = useState(null);
      const [isDataLoading, setIsDataLoading] = useState(true);
      const { expenses, budgets, error } = useDetails();
      const [refreshData, setRefreshData] = useState(false);

      useEffect(() => {
        // Check if there is an error
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            // console.log('Expenses:', expenses);
            setIsDataLoading(false);
        }
      }, [expenses, budgets, error]);

      const handleRefreshData = () => {
        setRefreshData((prev) => !prev);
      };

      const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
        
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const handleModalBtn = () =>{
        const modalButton = document.querySelector('.modal-button-click');
        if (modalButton) {
          modalButton.click();
        }
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
                        key={refreshData}  
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
        btnText='Add'
        btnColor= 'primary'
        btnVariant= 'contained'
        btnCommand= {handleModalBtn}
      />
      
    </>
  );
}
