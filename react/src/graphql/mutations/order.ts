import { gql } from "@apollo/client";

export const Remove_Order = gql`
  mutation ($_id: [ID!]) {
    deleteOrder(_id: $_id) {
      msg
    }
  }
`;

export const update_Order = gql`
  mutation ($input: updateOrderInput) {
    updateOrder(input: $input) {
      msg
    }
  }
`;
