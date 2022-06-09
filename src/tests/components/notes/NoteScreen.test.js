import React from 'react'
import { mount } from "enzyme"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store' //ES6 modules
import '@testing-library/jest-dom';
import { NoteScreen } from "../../../components/notes/NoteScreen";
import { activeNote } from "../../../actions/notes";


jest.mock("../../../actions/notes", () => ({
    activeNote: jest.fn()
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
            title: 'Hola',
            body: 'Mundo',
            date: 0
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
        <NoteScreen />
    </Provider>
);
describe('Pruebas sobre el componente <NoteScreen />', () => {

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de disparar el activeNote', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });

        expect( activeNote ).toHaveBeenLastCalledWith( initState.notes.active.id, {
            title: 'Hola de nuevo',
            body: initState.notes.active.body,
            date: initState.notes.active.date,
            id: initState.notes.active.id
        } )
    })
})