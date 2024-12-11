import React, { useState, useEffect, createContext } from 'react';

import app from '@services/firebase';
import { User, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

import { userSignUpType, userSignInType } from '@schemas/userSchema';
import { UserRole } from '@enums/UserRole';

interface AuthContextType {
    user: User | null;
    role: UserRole | null;
    loading: boolean;
    signUp: (data: userSignUpType) => Promise<void>;
    signIn: (data: userSignInType) => Promise<void>;
    signOut: () => Promise<void>;
    setUserRole: (uid: string, role: UserRole) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<UserRole | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const auth = getAuth(app);
    const db = getFirestore(app);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setUser(user);
            if (user) {
                const userDoc = doc(db, 'users', user.uid);
                const userDocSnap = await getDoc(userDoc);
                if (userDocSnap.exists()) {
                    const roleData = userDocSnap.data()?.role;
                    if (Object.values(UserRole).includes(roleData)) {
                        setRole(roleData as UserRole);
                    } else {
                        console.error("Invalid role");
                        setRole(null);
                    }
                }
            } else {
                setRole(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [auth, db]);

    const signUp = async (data: userSignUpType) => {
        const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const userDoc = doc(db, 'users', userCred.user.uid);
        await setDoc(userDoc, {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            role: null,
            createdAt: new Date(),
        });
    };

    const signIn = async (data: userSignInType) => {
        await signInWithEmailAndPassword(auth, data.email, data.password);
    };

    const signOut = async () => {
        await auth.signOut();
    };

    const setUserRole = async (uid: string, role: UserRole) => {
        if (role !== UserRole.ADMIN) {
            throw new Error("Only admins can set roles");
        }
        const userDoc = doc(db, 'users', uid);
        await updateDoc(userDoc, { role });
    };

    return (
        <AuthContext.Provider value={{ user, role, loading, signUp, signIn, signOut, setUserRole }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
