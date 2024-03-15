import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `/api/v1/auth/users`
      );

      // Sort users alphabetically by name
      const sortedUsers = response.data.users.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      // Add a serial number to each user
      const usersWithSerialNumber = sortedUsers.map((user, index) => ({
        ...user,
        serialNumber: index + 1,
      }));

      setUsers(usersWithSerialNumber);
    } catch (error) {

    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.serialNumber}</td>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;

