
import PageTitle from "../components/page-title/page-title";
import Header from "../components/header/header";
import MUIDataTable from "../components/data-table/data-table";
import { Card } from "@mui/material";
import DashboardGridLayout from "../components/dashboard-layout/dashboard-layout";



export default function ExpensesPage() {

    const data = [
        { id: 1, name: 'Food', amount: 100, date: '2024-06-10' },
        { id: 2, name: 'Dry cleaning', amount: 150, date: '2024-06-11' },
        // Add more data as needed
      ];
  return (
    <>
      <Header />
      <DashboardGridLayout>
        <PageTitle title="My Expenses" />
        <Card>
            <MUIDataTable data={data} />
        </Card>
      </DashboardGridLayout>
      
    </>
  );
}