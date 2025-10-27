import { createSlice } from "@reduxjs/toolkit";
// localStorage → memoria dentro il browser
// → contiene solo stringhe
// → rimane anche se aggiorno la pagina o spengo il pc
// → non scade finche non la cancello io

// (setItem() → memorizza i dati,  la salva nel browser)
// getItem() → prendi qualcosa → prendi la stringa salvata dentro auth
// → localStorage  può salvare solo stringhe ma noi vogliamo oggetti js quindi →
// JSON.parse → prende una stringa e la trasforma in oggetto js
//Il JSON viene trasformato in oggetto per usarlo in React

const auth = JSON.parse(localStorage.getItem("auth"));

const authSlice = createSlice({
    name:"auth",
    initialState:{
        // (?.) → evita errori se auth è null (optional chaining)
        // se nel localStorage c'è già un utente → usalo
        // altrimenti → metti null
        user: auth?.user || null,
        //accessToken===Token(solo che rinominato)
        //Se c’è un token salvato nel browser → usalo
        //Altrimenti → metti null
        accessToken: auth?.accessToken || null
    },
    reducers:{
        login: (state,action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;

            // ...action.payload: prende tutti i dati del login (user + token)
            //Così rimani loggata anche se aggiorni la pagina
            localStorage.setItem("auth", JSON.stingify({...action.payload}));
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
        }
    }
});

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;