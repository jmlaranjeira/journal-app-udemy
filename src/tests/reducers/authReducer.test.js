import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"


describe('Pruebas sobre el archivo authReducer', () => {

    test('Debe de realizar el login', () => {

        const initialState = {};

        const action = {
            type: types.login,
            payload: {
                uid: '2929',
                displayName: 'Jaime'
            }
        }

        const login = authReducer(initialState, action);
        expect( login ).toEqual( {
            uid: '2929',
            name: 'Jaime'
        });
    })

    test('Debe de realizar el logout', () => {

        const initialState = {
            uid: '2929',
            displayName: 'Jaime'
        };

        const action = {
            type: types.logout
        }

        const logout = authReducer(initialState, action);
        expect( logout ).toEqual({});
    })

    test('Debe de retornar el estado al ser una opción aleatoria', () => {

        const initialState = {
            uid: '2929',
            displayName: 'Jaime'
        };

        const action = {
            type: 'aleatoria'
        }

        const porDefecto = authReducer(initialState, action);
        expect( porDefecto ).toEqual(initialState);

    })
})