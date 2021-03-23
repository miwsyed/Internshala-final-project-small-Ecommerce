import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();
const cartContext = createContext();
const dispatchCartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return [];

    case 'ADD_ITEM': {
      const isInCart = state.some(item => item.id === action.id);

      return isInCart
        ? state.map(item =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : state.concat({ id: action.id, quantity: 1, price: action.price });
    }

    case 'REMOVE_ITEM': {
      const isInCart = state.some(item => item.id === action.id);

      return isInCart
        ? state.map(item =>
            item.id === action.id
              ? {
                  ...item,
                  quantity:
                    item.quantity > 1 ? item.quantity - 1 : item.quantity,
                }
              : item
          )
        : state;
    }

    case 'DROP':
      return state.filter(item => item.id !== action.id);

    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

const LS_KEY = 'Cart Trolley';

export const ProfileProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, [], initialValue => {
    const persistedValue = localStorage.getItem(LS_KEY);
    return persistedValue ? JSON.parse(persistedValue) : initialValue;
  });
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

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      <dispatchCartContext.Provider value={dispatchCart}>
        <cartContext.Provider value={cart}>{children}</cartContext.Provider>
      </dispatchCartContext.Provider>
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
export const useCart = () => useContext(cartContext);
export const useCartDispatch = () => useContext(dispatchCartContext);
