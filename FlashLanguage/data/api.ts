import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const USER_STORAGE_KEY = 'userid';

//
// INTERFACES
//
export interface Set {
  cards: number;
  description: string;
  creator: string;
  id: string;
  title: string;
  image?: any;
}

export interface Card {
  answer: string;
  id: string;
  question: string;
  image?: any;
  set: string;
}

//
// SET CALLS
//
export const createSet = async (set: Partial<Set>) => {
  const user = await AsyncStorage.getItem(USER_STORAGE_KEY);

  const response = await fetch(`${API_URL}/sets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...set, creator: user }),
  });
  return response.json();
};

export const getSets = async (): Promise<Set[]> => {
  try {
    const response = await fetch(`${API_URL}/sets`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching sets:", error, API_URL);

    if (error instanceof TypeError) {
      console.error("A network error occurred. Check your internet connection.");
    } else if (error instanceof SyntaxError) {
      console.error("Error parsing JSON response. Make sure the server returns valid JSON.");
    }

    throw error; // Re-throw the error to handle it in the calling code if needed
  }
};

export const deleteSet = async (setid: string) => {
  const response = await fetch(`${API_URL}/sets/${setid}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const getMySets = async (): Promise<{ id: string; set: Set; canEdit: boolean }[]> => {
  const user = await AsyncStorage.getItem(USER_STORAGE_KEY);

  const response = await fetch(`${API_URL}/usersets?user=${user}`);
  const data = await response.json();
  return data.map((item: any) => ({ ...item, canEdit: item.set.creator === user }));
};

export const getSet = async (id: string): Promise<Set> => {
  const response = await fetch(`${API_URL}/sets/${id}`);
  return response.json();
};

export const addToFavorites = async (set: string) => {
  const user = await AsyncStorage.getItem(USER_STORAGE_KEY);

  const response = await fetch(`${API_URL}/usersets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, set }),
  });
  return response.json();
};

//
// CARDS CALLS
//
export const getLearnCards = async (setid: string, limit: string) => {
  const response = await fetch(`${API_URL}/cards/learn?setid=${setid}&limit=${limit}`);
  return response.json();
};

export const getCardsForSet = async (setid: string) => {
  const response = await fetch(`${API_URL}/cards?setid=${setid}`);
  return response.json();
};

export const createCard = async (card: Partial<Card>) => {
  const response = await fetch(`${API_URL}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  return response.json();
};

//
// LEARNINGS CALLS
//

export const saveLearning = async (
  setid: string,
  cardsTotal: number,
  correct: number,
  wrong: number
) => {
  const user = await AsyncStorage.getItem(USER_STORAGE_KEY);

  const response = await fetch(`${API_URL}/learnings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, set: setid, cardsTotal, correct, wrong }),
  });
  return response.json();
};

export const getUserLearnings = async () => {
  const user = await AsyncStorage.getItem(USER_STORAGE_KEY);

  const response = await fetch(`${API_URL}/learnings?user=${user}`);
  return response.json();
};