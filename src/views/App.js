import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const App = ({ history }) => {
  return (
    <div>
      <Query query={HELLO_QUERY}>
            {props => {
              console.log(props)
              const { data, loading, error, refetch } = props
              if (loading) {
                return <div>Loading</div>
              }

              if (error) {
                return <div>Error</div>
              }

              return (
                <div>
                  <p>Lorem ipsum</p>
                  
                  <h3>{data.hello}</h3>
                </div>
              )
            }}
          </Query>
    </div>
  )
}

const HELLO_QUERY = gql`
  query HelloQuery($name: String) {
    hello(name: $name)
  }
`

export default App