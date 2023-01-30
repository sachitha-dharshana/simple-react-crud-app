import Header from "./components/ui/Header";
import "./App.css";
import EmployeeList from "./components/ui/EmployeeList";
import { EmployeeContextProvider } from "./contexts/employeeContext";

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeContextProvider>
        <EmployeeList />
      </EmployeeContextProvider>
    </div>
  );
}

export default App;
