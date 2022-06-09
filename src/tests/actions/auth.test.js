import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types";
import '@testing-library/jest-dom';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    // auth: {
    //     uid: 'TESTING',
    //     displayName: 'Manuel'
    // },
    // notes: {
    //     active: null,
    //     notes: []
    // },
    // ui: {
    //     loading: false,
    //     msgError: null
    // }
}

const auth = {
    uid: 'TESTING',
    displayName: 'Manuel'
}

const userLogin = { 
    email: 'bertin@gmail.com', 
    password: '123456',
    uid: 'zeik2ujeoabJs5JkaDaY1j60pZd2'
}

let store = mockStore(initState);

describe('Pruebas sobre el auth-action', () => {

    beforeEach( () => {
        store = mockStore(initState);
    })

    test('login y logout deben de crear la acción respectiva', () => {
        // login
        // logout

        // Mi version
        // await store.dispatch( login( initState.auth.uid, initState.auth.displayName ) );
        // await store.dispatch( logout() );

        // const actions = store.getActions();
        
        // expect( actions[0].type ).toBe( types.login );
        // expect( actions[1].type ).toBe( types.logout );

        // Version del curso
        const loginAction = login( auth.uid, auth.displayName );
        const logoutAction = logout();

        expect( loginAction ).toEqual( {
            type: types.login,
            payload: auth 
        });

        expect( logoutAction ).toEqual({
            type: types.logout
        });

    })

    test('startLogout - debe de realizar el logout', async() => {

        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0].type ).toBe( types.logout );
        expect( actions[1].type ).toBe( types.notesLogoutCleaning );

    })

    test('startLoginEmailPassword - debe de realizar el login con Email y Contraseña', async() => {

        await store.dispatch( startLoginEmailPassword( userLogin.email, userLogin.password ) );

        const actions = store.getActions();

        expect( actions[1] ).toEqual( {
            type: types.login,
            payload: {
                uid: userLogin.uid,
                displayName: null
            }
         });

    })
})