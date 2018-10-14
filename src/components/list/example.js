import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
`;

//graphql<InputProps, Response, Variables, ChildProps>
// graphql<InputProps = {episode} like a param,
//   Response => response from ALL_LINKS_QUERY,
//  Variables => from options.variable>
// ChildProps => for regenerate props (for example)
const withCharacter = graphql(ALL_LINKS_QUERY, {
    options: ({ episode }) => ({
        variables: { episode, example: 'temp' },
        
    }),
    props: ({ data }) => ({ ...data })
  });

export default withCharacter((data) => {
    if (data.loading) return <div>Loading</div>;
    if (data.error) return <h1>ERROR</h1>;

    return (
        <div>Result after manipul..fsfd .</div>
    )
  });