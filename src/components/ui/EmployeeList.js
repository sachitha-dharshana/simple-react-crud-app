import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../../contexts/employeeContext";
import AddUpdateEmployee from "./AddUpdateEmployee";

const EmployeeList = () => {
  //ctx
  const {
    employeeData,
    deleteEmployee,
    isAddUpdateEmployeeVisible,
    setIsAddUpdateEmployeeVisible,
    selectedEmployeeId,
    setSelectedEmployeeId,
  } = useContext(EmployeeContext);

  //helper fn
  const handleEdit = (id) => {
    setIsAddUpdateEmployeeVisible(true);

    setSelectedEmployeeId(id);
  };

  return employeeData ? (
    <div className="employee-list">
      <div className="employee-list-header">
        <h2>Employee List</h2>
        <button onClick={() => setIsAddUpdateEmployeeVisible(true)}>
          Add Employee
        </button>
      </div>

      {isAddUpdateEmployeeVisible && (
        <AddUpdateEmployee selectedEmployeeId={selectedEmployeeId} />
      )}

      <table className="table">
        <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Action</td>
        </thead>
        <tbody>
          {employeeData.users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td className="action-buttons">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="action-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmployee(user.id)}
                    className="action-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default EmployeeList;
