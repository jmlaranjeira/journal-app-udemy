import React from 'react'
import { mount } from "enzyme"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store' //ES6 modules
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from "../../routers/AppRouter";
import { login } from "../../actions/auth";
import { act } from "react-dom/test-utils";
import { firebase } from "../../firebase/firebase-config";
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))

jest.mock("../../actions/auth", () => ({
    login: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'ABC',
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const userLogin = {
    email: 'bertin@gmail.com', 
    password: '123456'
}

describe('Pruebas sobre <AppRouter />', () => {

    test('debe llamar Login si estoy autenticado', async() => {

        let user;

        await act(async() => {
            const userCredentials = await firebase.auth().signInWithEmailAndPassword( userLogin.email, userLogin.password );
            user = userCredentials.user;

            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );
        })

        expect( login ).toHaveBeenCalledWith('zeik2ujeoabJs5JkaDaY1j60pZd2', null);
    })
})