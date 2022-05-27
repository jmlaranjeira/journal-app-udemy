
import React from 'react'
import { JournalEntry } from "./JournalEntry";

export const JornalEntries = () => {

    const entries = [2,3,4,5,6];



  return (
    <div className="journal__entries">
        
        {
            entries.map( value => (
                <JournalEntry key={value} />
            ))
        }
    </div>
  )
}
