import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import Api from '@awabah/api';

type AuthContextData = {
  authData?: AuthData;
  // authError?: AuthError;
  loading: boolean;
  authenticate: (data: any) => void;
  register: (data: any) => void;
  signOut(): void;
  // forgotPassword: (data: any) => void;
  // resetPassword: (data: any) => void;
  // verification: (data: any) => void;
  // resendVerification: (data: any) => void;
  // verifyBvn: (data: any) => void;
  // setAuthError?: Dispatch<SetStateAction<string>>;
  // isLoading?: boolean;
  // bvnVerified: boolean;
  // fullname: string;
};

type AuthData = {
  token: string;
  id: string;
  name: string;
  bvnVerified: boolean;
};

type AuthError = string | undefined;

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [bvnVerified, setBvnVerified] = useState<boolean>(false);
  const [authError, setAuthError] = useState<AuthError>();
  const [loading, setLoading] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [fullname, setFullName] = useState('');

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      setLoading(true);
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
        setBvnVerified(_authData.bvnVerified);
        setFullName(_authData.name);
      }
    } catch (error) {
      // handle error
    } finally {
      setLoading(false);
    }
  }

  const register = async (formData) => {
    // const { result, error } = await Api.Auth.CreateNewUser({
    //   ...formData,
    // });

    // if (error) {
    //   setAuthError(error.message);
    //   return;
    // }
    // if (result !== undefined) {
    //   setAuthData(result);
    //   AsyncStorage.setItem('@AuthData', JSON.stringify(result));
    //   return;
    // }
    return;
  };

  const authenticate = async (formData) => {
    // setisLoading(true);
    // const { result, error } = await Api.Auth.SignInExistingUser({
    //   ...formData,
    // });
    // if (error) {
    //   setAuthError(error.message);
    //   setisLoading(false);
    //   return;
    // }
    // if (result !== undefined) {
    //   setAuthData(result.data);
    //   setBvnVerified(result.data.bvnVerified);
    //   setFullName(result.data.name);
    //   AsyncStorage.setItem('@AuthData', JSON.stringify(result.data));
    //   setisLoading(false);
    //   return;
    // }
  };

  const signOut = async () => {
    setAuthData(undefined);
    setAuthError(undefined);
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        // authError,
        loading,
        authenticate,
        register,
        signOut,
        // setAuthError,
        // isLoading,
        // bvnVerified,
        // fullname,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
