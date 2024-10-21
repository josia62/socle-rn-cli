import { RootState } from '../../store';

export const selectAge = (state: RootState) => state.example.age;
export const selectToken = (state: RootState) => state.example.token;
