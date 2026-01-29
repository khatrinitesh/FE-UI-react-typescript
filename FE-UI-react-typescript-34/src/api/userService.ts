import axios from "axios";
import type { User } from "../interface/User";

const API_URL = "http://localhost:4000/users";

export const getUsers = () => axios.get<User[]>(API_URL);
// C create insert new data into database

export const createUser = (user: User) => axios.post(API_URL, user);
// R read post

export const updateUser = (id: number, user: User) =>
  axios.put(`${API_URL}/${id}`, user);
// U put edit

export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);
//  D delete
