/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCountingInput = {
  id?: string | null,
  name: string,
  number?: number | null,
};

export type ModelCountingConditionInput = {
  name?: ModelStringInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelCountingConditionInput | null > | null,
  or?: Array< ModelCountingConditionInput | null > | null,
  not?: ModelCountingConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCountingInput = {
  id: string,
  name?: string | null,
  number?: number | null,
};

export type DeleteCountingInput = {
  id?: string | null,
};

export type ModelCountingFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelCountingFilterInput | null > | null,
  or?: Array< ModelCountingFilterInput | null > | null,
  not?: ModelCountingFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateCountingMutationVariables = {
  input: CreateCountingInput,
  condition?: ModelCountingConditionInput | null,
};

export type CreateCountingMutation = {
  createCounting:  {
    __typename: "Counting",
    id: string,
    name: string,
    number: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCountingMutationVariables = {
  input: UpdateCountingInput,
  condition?: ModelCountingConditionInput | null,
};

export type UpdateCountingMutation = {
  updateCounting:  {
    __typename: "Counting",
    id: string,
    name: string,
    number: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCountingMutationVariables = {
  input: DeleteCountingInput,
  condition?: ModelCountingConditionInput | null,
};

export type DeleteCountingMutation = {
  deleteCounting:  {
    __typename: "Counting",
    id: string,
    name: string,
    number: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCountingQueryVariables = {
  id: string,
};

export type GetCountingQuery = {
  getCounting:  {
    __typename: "Counting",
    id: string,
    name: string,
    number: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCountingsQueryVariables = {
  filter?: ModelCountingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCountingsQuery = {
  listCountings:  {
    __typename: "ModelCountingConnection",
    items:  Array< {
      __typename: "Counting",
      id: string,
      name: string,
      number: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCountingSubscription = {
  onCreateCounting:  {
    __typename: "Counting",
    id: string,
    name: string,
    number: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCountingSubscription = {
  onUpdateCounting:  {
    __typename: "Counting",
    id: string,
    name: string,
    number: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCountingSubscription = {
  onDeleteCounting:  {
    __typename: "Counting",
    id: string,
    name: string,
    number: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
