import React, { useState } from "react";
import { useQuery, gql , useLazyQuery } from "@apollo/client";
const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      name
      id
      username
      age
      nationality
    }
  }
`;
const DisplayData = () => {
  const [movieSearchData , setMovieSearchData] = useState("");
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);
  // const [fetchMovie ,{data : movieSearchData , error }] = useLazyQuery();
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
      <input type="text" onChange={(e) => setMovieSearchData(e.target.value)}/>
      <button onClick={() => {
        console.log("Movie name is " + movieSearchData)
      }}>Search</button>
    </div>
    );
  }
};

export default DisplayData;
