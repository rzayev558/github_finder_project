import React from "react";
import { useEffect, useState, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner></Spinner>;
  }
}

export default UserResults;
