
import React from 'react'
import { mount } from "enzyme"
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store' //ES6 modules
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { Provider } from "react-redux";
import { types } from "../../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
// store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <RegisterScreen /> 
        </MemoryRouter>
    </Provider>
)


describe('Pruebas sobre <RegisterScreen />', () => {

    test('debe de crearse correctamente el Snapshot', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe hacer el dispatch de la acción respectiva', () => {

        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email no valido'
        })
        
    })

    test('debe de mostrar la caja de alerta con el error', () => {

        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Email no valido'
            }
        };
        
        const store = mockStore(initState);

        const wrapper = mount( 
            <Provider store={ store }>
                <MemoryRouter>
                    <RegisterScreen /> 
                </MemoryRouter>
            </Provider>
        )

        expect( wrapper.find('.auth__alert-error').exists() ).toBe(true);
        expect( wrapper.find('.auth__alert-error').text().trim() ).toBe( initState.ui.msgError );

    })
})