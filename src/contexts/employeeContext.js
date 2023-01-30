import { data } from "./data.js";
import { useEffect, useState, createContext } from "react";

const initState = {
  employeeData: {},
  isAddUpdateEmployeeVisible: false,
  setIsAddUpdateEmployeeVisible: () => undefined,
  selectedEmployeeId: null,
  setSelectedEmployeeId: () => undefined,
  addEmployee: () => undefined,
  deleteEmployee: () => undefined,
  updateEmployee: () => undefined,
};

export const EmployeeContext = createContext(initState);

export const EmployeeContextProvider = ({ children }) => {
  //data
  const [employeeData, setEmployeeData] = useState(data);

  //state
  const [isAddUpdateEmployeeVisible, setIsAddUpdateEmployeeVisible] =
    useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  //fn
  const addEmployee = (name, email) => {
    if (name !== "" && email !== "") {
      const newID =
        employeeData.users.length === 0
          ? 1
          : employeeData.users[employeeData.users.length - 1].id + 1;
      const newEmployeeData = { id: newID, Name: name, Email: email };

      setEmployeeData({ users: [...employeeData.users, newEmployeeData] });

      setIsAddUpdateEmployeeVisible(false);
    } else {
      alert("Please fill name and/or email");
    }
  };

  const deleteEmployee = (id) => {
    const deleteEmployeeData = employeeData.users.filter(
      (emp) => emp.id !== id
    );
    setEmployeeData({ users: deleteEmployeeData });
  };

  const updateEmployee = (id, name, email) => {
    const updatedEmployeeList = employeeData.users.map((user) => {
      if (user.id === id) {
        return { ...user, Name: name, Email: email };
      } else {
        return user;
      }
    });

    setEmployeeData({ users: updatedEmployeeList });
    setIsAddUpdateEmployeeVisible(false);
    setSelectedEmployeeId(null);
  };

  useEffect(() => {
    setEmployeeData(data);
  }, []);

  const contextStates = {
    employeeData,
    isAddUpdateEmployeeVisible,
    setIsAddUpdateEmployeeVisible,
    selectedEmployeeId,
    setSelectedEmployeeId,

    deleteEmployee,
    addEmployee,
    updateEmployee,
  };

  return (
    <EmployeeContext.Provider value={{ ...contextStates }}>
      {children}
    </EmployeeContext.Provider>
  );
};
