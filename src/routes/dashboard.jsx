import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../components/header/header";
import { WelcomeMsg } from "../components/welcome-msg/welcome-msg";
import DashboardGridLayout from "../components/dashboard-layout/dashboard-layout";


export default function DashboardPage() {
  return (
    <>
      <Header />
      <DashboardGridLayout>
        <WelcomeMsg />
      </DashboardGridLayout>
      
    </>
  );
}