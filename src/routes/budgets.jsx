import { Link } from "react-router-dom";

export default function BudgetsPage() {
  return (
    <>
      <h1>Budgets page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        
      </ul>
    </>
  );
}