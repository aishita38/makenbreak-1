// src/firebase.ts
// Firebase configuration and initialization
//
// This file imports Firebase configuration from firebase.config.local.js
// which contains your actual Firebase project credentials.
//
// To set up:
// 1. Copy firebase.config.example.js to firebase.config.local.js
// 2. Fill in your actual Firebase project values
// 3. Never commit firebase.config.local.js to version control

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebase.config.local';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
