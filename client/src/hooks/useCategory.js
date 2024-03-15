import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get category 
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`/api/v1/category/get-category`);
      setCategories(data?.category);
    } catch (error) {
      // toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}