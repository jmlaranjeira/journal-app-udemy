import React from 'react'
import { mount } from "enzyme"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store' //ES6 modules
import '@testing-library/jest-dom';
import { Sidebar } from "../../../components/journal/Sidebar";
import { startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";

jest.mock("../../../actions/notes", () => ({
    startNewNote: jest.fn()
}))

jest.mock("../../../actions/auth", () => ({
    startLogout: jest.fn()
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

const wrapper = mount(
    <Provider store={ store }>
        <Sidebar />
    </Provider>
);

describe('Pruebas sobre <Sidebar />', () => {

    beforeEach( () => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    test('Debe de crear correctamente el Snapshot', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de llamar al startLogout', () => {

        wrapper.find('.btn').prop('onClick')();

        expect( startLogout ).toHaveBeenCalled();
    })

    test('Debe de llamar al startNewNote', () => {

        wrapper.find('.jorunal__new-entry').prop('onClick')();

        expect( startNewNote ).toHaveBeenCalled();
    })
})