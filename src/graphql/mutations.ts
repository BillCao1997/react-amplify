/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCounting = /* GraphQL */ `
  mutation CreateCounting(
    $input: CreateCountingInput!
    $condition: ModelCountingConditionInput
  ) {
    createCounting(input: $input, condition: $condition) {
      id
      name
      number
      createdAt
      updatedAt
    }
  }
`;
export const updateCounting = /* GraphQL */ `
  mutation UpdateCounting(
    $input: UpdateCountingInput!
    $condition: ModelCountingConditionInput
  ) {
    updateCounting(input: $input, condition: $condition) {
      id
      name
      number
      createdAt
      updatedAt
    }
  }
`;
export const deleteCounting = /* GraphQL */ `
  mutation DeleteCounting(
    $input: DeleteCountingInput!
    $condition: ModelCountingConditionInput
  ) {
    deleteCounting(input: $input, condition: $condition) {
      id
      name
      number
      createdAt
      updatedAt
    }
  }
`;
