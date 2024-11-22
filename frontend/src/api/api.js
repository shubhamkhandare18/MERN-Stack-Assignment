
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Replace with your backend API URL

export const fetchTransactions = async (month, search, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`, {
      params: { month, search, page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

export const fetchStatistics = async (month) => {
  try {
    const response = await axios.get(`${BASE_URL}/statistics`, { params: { month } });
    return response.data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error;
  }
};

export const fetchBarChartData = async (month) => {
  try {
    const response = await axios.get(`${BASE_URL}/barchart`, { params: { month } });
    return response.data;
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    throw error;
  }
};

export const fetchPieChartData = async (month) => {
  try {
    const response = await axios.get(`${BASE_URL}/piechart`, { params: { month } });
    return response.data;
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    throw error;
  }
};
