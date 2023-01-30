import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../../contexts/employeeContext";

const AddUpdateEmployee = () => {
  //ctx
  const {
    employeeData,
    addEmployee,
    updateEmployee,
    setIsAddUpdateEmployeeVisible,
    selectedEmployeeId,
    setSelectedEmployeeId,
  } = useContext(EmployeeContext);

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const selectedUser =
    selectedEmployeeId !== null &&
    employeeData.users.find((user) => user.id === selectedEmployeeId);

  useEffect(() => {
    if (selectedEmployeeId !== null) {
      setName(selectedUser.Name);
      setEmail(selectedUser.Email);
    }
  }, [selectedUser.Name, selectedUser.Email, selectedEmployeeId]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
  };

  return (
    <div className="add-new-employee">
      Name: <input value={name} onChange={handleNameChange} type="text"></input>
      <br />
      Email:{" "}
      <input value={email} onChange={handleEmailChange} type="text"></input>
      <br />
      <button
        className="add-employee-btns"
        onClick={() => {
          setIsAddUpdateEmployeeVisible(false);
          setSelectedEmployeeId(null);
        }}
      >
        Back
      </button>
      <button className="add-employee-btns" onClick={handleClear}>
        Clear
      </button>
      <button
        onClick={
          selectedEmployeeId !== null
            ? () => updateEmployee(selectedUser.id, name, email)
            : () => addEmployee(name, email)
        }
        className="add-employee-btns"
      >
        {selectedEmployeeId !== null ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AddUpdateEmployee;
