import {createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'users',
    initialState: {
        '1': {
            id: '1',
            initials: 'CA',
            name: 'Carlos',
            me: true,
        },
        '2': {
            id: '2',
            initials: 'BM',
            name: 'Brendo Maciel',
        },
        '3': {
            id:'3',
            initials: 'GS',
            name: 'Gerlan Stanley',
        },
        '4': {
            id: '4',
            initials: 'DM',
            name: 'Davi Matos',
        },
        '5': {
            id: '5',
            initials: 'MQ',
            name: 'Miqueias',
        },
        '6': {
            id: '6',
            initials: 'MS',
            name: 'Mossoró',
        }
    },
    reducers:{}
});

export const selectUsers = state => state.users;

export const selectCurrentUser = state => Object.values(state.users).find(e => e.me);

export default slice.reducer;