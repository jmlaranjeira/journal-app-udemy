import React from 'react'
import { mount } from "enzyme"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store' //ES6 modules
import '@testing-library/jest-dom';
import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from "../../../actions/notes";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let initState = {};

const note = {
    id: 10,
    date: 0,
    title: 'Hola',
    body: 'Mundo',
    url: 'https://prueba.com/imagen.png'
}

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <JournalEntry {...note} />
    </Provider>
);

describe('Pruebas sobre el componente <JournalEntry />', () => {

    test('Debe de mostrarse el Snapshot correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe de activar la nota', () => {

        wrapper.find('.journal__entry').prop('onClick')();
        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote( note.id, {...note} )
        );
    })
})