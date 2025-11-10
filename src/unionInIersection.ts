type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
  if (role == "admin") {
    return "Admin Dashboard";
  } else if (role == "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

// Intersection
type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;
