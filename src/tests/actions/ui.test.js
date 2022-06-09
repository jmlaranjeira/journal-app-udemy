import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";


describe('Pruebas sobre ui-actions', () => {

    test('Todas las acciones deben de crearse', () => {

        const action = setError('Help!!!');
        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'Help!!!'
        })

        const removeErrorAction = removeError('');
        const startLoadingAction = startLoading('');
        const finishLoadingAction = finishLoading('');

        expect( removeErrorAction ).toEqual({
            type: types.uiRemoveError
        })
        expect( startLoadingAction ).toEqual({
            type: types.uiStartLoading
        })
        expect( finishLoadingAction ).toEqual({
            type: types.uiFinishLoading
        })
    })

})