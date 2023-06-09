import { StatusMsg } from "./../types/statusMsg";
import { gql } from "apollo-server-express";
import "../types/Date.js";
export const userTypeDefs = gql`
  ${StatusMsg}
  scalar Date
  type Fav {
    productId: ID
    parentId: ID
    _id: ID
    path: String
    price: Float
    title: String
    msg: String
  }

  type Cart {
    productId: ID
    parentId: ID
    count: Int
    _id: ID
    path: String
    price: Float
    title: String
    msg: String
  }

  type Compare {
    productId: ID
    _id: ID
    title: String
    msg: String
    state: String
  }

  type Notification {
    _id: ID
    isRead: Boolean
    content: String
    createdAt: Date
  }

  type User {
    _id: ID
    name: String
    image: String
    email: String
    password: String
    msg: String
    country: String
    role: String
    phone: String
    status: Int
    fav: [Fav]
    cart: [Cart]
    compare: [Compare]
    createdAt: Date
    lastLogIn: Date
    notificationsCount: Int
    notifications: [Notification]
  }
  input AddUserInput {
    name: String!
    email: String!
    password: String!
    country: String!
    image: String
  }

  input AddToCartInput {
    userId: ID
    productId: ID
    parentId: ID
    count: Int
    title: String
    path: String
    price: Float
  }

  input removeFromCartInput {
    productId: [ID!]
    userId: ID!
  }
  input changeCartCountInput {
    productId: ID
    userId: ID!
    count: Int
  }

  input AddToCompareInput {
    userId: ID
    productId: ID
    title: String
  }

  input removeFromCompareInput {
    userId: ID
    productId: ID
  }

  input AddToFavInput {
    productId: ID
    parentId: ID
    title: String
    path: String
    price: Float
    userId: ID
  }

  input RemoveFromFavInput {
    productId: [ID!]
    userId: ID!
  }

  type Query {
    users: [User]
  }
  type Mutation {
    addUser(input: AddUserInput): User
    authenticate(password: String!, email: String!): StatusMsg
    getUserData(id: ID!): User
    addToCart(input: AddToCartInput): Cart
    removeFromCart(input: removeFromCartInput): StatusMsg
    changeCartCount(input: changeCartCountInput): StatusMsg
    addToCompare(input: AddToCompareInput): Compare
    removeFromCompare(input: removeFromCompareInput): Compare
    addToFav(input: AddToFavInput): Fav
    removeFromFav(input: RemoveFromFavInput): StatusMsg
    updateUserRole(_id: ID!, role: String!): StatusMsg
    logOut(lastLogIn: Date, _id: ID): StatusMsg
    resetNotificationCount(id: ID!): StatusMsg
    deleteNotification(id: ID!, userId: ID!): StatusMsg
    toggleReadNotification(id: ID!, userId: ID!, isRead: Boolean): StatusMsg
    ClearNotification(userId: ID!): StatusMsg
    ClearFav(userId: ID!): StatusMsg
    MarkAllAsReadNotification(userId: ID!): StatusMsg
    updateUserName(_id: ID!, name: String!): StatusMsg
    updateUserCountry(_id: ID!, country: String!): StatusMsg
    updateUserPhone(_id: ID!, phone: String!): StatusMsg
    updateEmail(_id: ID!, email: String!): StatusMsg
    updatePassword(
      _id: ID!
      oldPassword: String!
      newPassword: String!
    ): StatusMsg
  }
`;
