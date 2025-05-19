import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";

import { IUser } from "../types";
import { getCurrentUser } from "../services/AuthService";

// 2️⃣ Define the context type
interface UserContextType {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

// 3️⃣ Create the context with default undefined
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

// 4️⃣ Define props for children
interface UserProviderProps {
  children: ReactNode;
}

// 5️⃣ UserProvider component
const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUser = async () => {
    const user = await getCurrentUser();

    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
