import { createContext, useState } from 'react';
export const AuthContext = createContext(null);
export function AuthProvider({ children }) { const [user, setUser] = useState(null); const login = (nextUser) => setUser(nextUser || { username: 'srk.king', name: 'Shah Rukh Khan' }); const register = login; const logout = () => setUser(null); const updateUser = (updates) => setUser((current) => ({ ...current, ...updates })); return <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>{children}</AuthContext.Provider>; }
