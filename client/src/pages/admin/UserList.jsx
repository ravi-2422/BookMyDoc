import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { hideLoading, showLoading } from "../../redux/alertSlice";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const {user} = useSelector((user)=>user.user);
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const getUsersData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/admin/get-all-users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getUsersData();
    if(user?.isAdmin === false){
      nevigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (record , text) => moment(record.createdAt).format("DD-MM-YYYY"),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <h1 className="anchor">Block</h1>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="page-header">Users List</h1>
      <hr />
      <Table columns={columns} dataSource={users}/>
    </Layout>
  );
}

export default UserList;