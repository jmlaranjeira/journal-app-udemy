

import React from 'react'
import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
        
        <NotesAppBar />

        <div className="notes__content">

            <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off"/>
            <textarea placeholder="What happened today" className="notes__textarea"></textarea>
            <div className="notes__image">
                <img src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" alt="imagen" />
            </div>
        </div>
    </div>
  )
}
