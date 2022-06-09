import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'dkvl2lhxi', 
    api_key: '153263477474939', 
    api_secret: 'W0NEqsQnMhY2JCUbAaX2nVamswI',
    secure: true
  });

describe('Pruebas sobre el helper fileUpload', () => {

    test('Debe de cargar un archivo y retornar el URL', async() => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        // Borrar imagen por id
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.png', '');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            // done();
        });
    })

    test('Debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe(null);
    })
})