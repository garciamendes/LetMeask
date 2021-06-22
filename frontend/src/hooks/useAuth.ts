// React
import { useContext } from "react";

// Context
import { AuthContext } from "../contexts/AuthContext"

export function useAuth() {
  const value = useContext(AuthContext)
  
  return value;
}