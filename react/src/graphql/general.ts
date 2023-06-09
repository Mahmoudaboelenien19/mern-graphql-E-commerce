import { gql } from "@apollo/client";

export const GET_Product_By_Id = gql`
  query ($id: ID!) {
    product(id: $id) {
      reviews {
        image
        user
        review
        rate
        _id
        userId
      }
      _id
      price
      stock
      title
      description
      rating
      category
      state

      images {
        productPath
        _id
      }
    }
  }
`;

export const Get_All_Products = gql`
  query {
    products {
      _id
      price
      stock
      title
      state
      rating
      category
      createdAt
      reviews {
        image
        user
        userId
        review
        rate
        _id
      }
      description
      images {
        productPath
        _id
      }
    }
  }
`;
