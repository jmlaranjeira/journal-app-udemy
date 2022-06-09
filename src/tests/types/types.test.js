import { types } from "../../types/types";


describe('Pruebas sobre el archivo Types.js', () => {

    const typesAux = {

        login: '[Auth] Login',
        logout: '[Auth] Logout',
    
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
    
        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',
    
        notesAdd: '[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdate: '[Notes] Update note',
        notesFileUrl: '[Notes] Update image url',
        notesDelete: '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logout Cleaning',
        
    };

    test('Debe contenter todos los tipados', () => {
        expect( types ).toEqual( typesAux );
    })
})