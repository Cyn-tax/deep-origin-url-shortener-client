import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL; // Adjust as needed

interface User {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export const login = async (user: User): Promise<Object> => {
  try {
    const response = await axios.post<AuthResponse>(`${BASE_URL}/api/login`, user);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const signUp = async (user: User): Promise<Object> => {
  try {
    const response = await axios.post<AuthResponse>(`${BASE_URL}/api/signup`, user);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await axios.post(`${BASE_URL}/api/logout`);
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};