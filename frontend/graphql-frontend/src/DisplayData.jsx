import React from "react";
import { useQuery, gql } from "@apollo/client";
const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      name
      id
      username
      age
    }
  }
`;
const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  if (data) {
    console.log(data);
  } else if (error) {
    console.log(error);
  }
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return(
    <div>
      {data && data.users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.age}</p>
          </div>
        )
      })}
    </div>
    );
  }
};

export default DisplayData;
