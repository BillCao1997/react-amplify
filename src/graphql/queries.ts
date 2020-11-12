/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCounting = /* GraphQL */ `
  query GetCounting($id: ID!) {
    getCounting(id: $id) {
      id
      name
      number
      createdAt
      updatedAt
    }
  }
`;
export const listCountings = /* GraphQL */ `
  query ListCountings(
    $filter: ModelCountingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
