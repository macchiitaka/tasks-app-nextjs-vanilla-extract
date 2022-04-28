import constate from 'constate';
import { useState } from 'react';

export const [TokenProvider, useToken, useSetToken] = constate(
  () => useState(''),
  ([token]) => token,
  ([, setToken]) => setToken,
);
