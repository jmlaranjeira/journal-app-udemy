import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { startDeleting, startLoadingNotes, startNewNote, startSaveNote, startUploading } from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import { types } from "../../types/types";

jest.mock( '../../helpers/fileUpload', () => ({
    fileUpload: jest.fn( () => {
        return 'https://hola-mundo.com/foto.jpg'
        // return Promise.resolve('https://hola-mundo.com/foto.jpg')
    })
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: 'TESTING',
    },
    notes: {
        active: {
            id: 'BrCFzOQeFrrwEsgRa2vb',
            title: 'Hola',
            body: 'mundo'
        }
    }
}

let store = mockStore(initState)

describe('Pruebas sobre notes-actions', () => {

    beforeEach( () => {
        store = mockStore(initState);
    })

    test('debe de crear una nueva nota startNewNote', async() => {

        await store.dispatch( startNewNote() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
              }
        })

        expect( actions[1] ).toEqual({
            type: types.notesAdd,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
              }
        })

        // opción con db.doc
        const docId = actions[1].payload.id;
        await db.doc(`/TESTING/journal/notes/${ docId }`).delete();

        // opción con dipsatch

        // await store.dispatch( startDeleting(actions[1].payload.id) );
        
        // const lastActions = store.getActions();
        
        // expect( lastActions[2] ).toEqual({
        //     type: types.notesDelete,
        //     payload: actions[1].payload.id
        // })
    })

    test('startLoadingNotes debe cargar las notas', async() => {

        await store.dispatch( startLoadingNotes('TESTING') );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        })

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        }

        expect(actions[0].payload[0]).toMatchObject( expected );

    })

    test('startSaveNote debe de actualizar la nota', async() => {

        const note = {
            id: 'BrCFzOQeFrrwEsgRa2vb',
            title: 'titulo2',
            body: 'body'
        }

        await store.dispatch( startSaveNote(note) );

        const actions = store.getActions();
        
        expect( actions[0].type ).toBe( types.notesUpdate );

        const docRef = await db.doc(`/TESTING/journal/notes/${ note.id }`).get();
        expect( docRef.data().title ).toBe( note.title );

    })

    test('startLoadingNotes debe de actualizar el url de la nota', async() => {
        
        const file = new File([], 'foto.jpg');

        await store.dispatch( startUploading( file ) );

        const docRef = await db.doc(`/TESTING/journal/notes/${ initState.notes.active.id }`).get();
        expect( docRef.data().url ).toBe( 'https://hola-mundo.com/foto.jpg' );

    })
})