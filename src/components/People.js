import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

const GET_PEOPLE = gql`
  {
    people {
      name
      age
    }
  }
`;

const People = props => {
  debugger;
  return (
    <Query query={GET_PEOPLE}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return <p>{JSON.stringify(data)}
        <br />
        <Link to="/">HOME</Link></p>;
      }}
    </Query>
  );
};

export default People;
