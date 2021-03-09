import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, database } from '../misc/firebase';
import dataa from '../data';

const ProfileContext = createContext();
const CartContext = createContext();
const SetCartContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const { products } = dataa;
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;

    const authUnsub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt } = snap.val();

          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };

          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }

        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnsub();

      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile, products }}>
      <SetCartContext.Provider value={setCart}>
        <CartContext.Provider value={cart}>{children}</CartContext.Provider>
      </SetCartContext.Provider>
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
export const useSetCart = () => useContext(SetCartContext);
export const useCart = () => useContext(CartContext);
