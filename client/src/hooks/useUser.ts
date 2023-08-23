import { useSelector } from "react-redux";

export const useUser = () => useSelector((state: any) => state.user);
