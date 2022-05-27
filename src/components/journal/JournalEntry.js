

import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
        <div className="journal__entry-picture"
        style={{
            backgroundSize: "cover",
            backgroundImage: "url(https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-1280x720.jpg)"
        }}></div>
        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo día
            </p>
            <p className="journal__entry-content">
                Reprehenderit anim occaecat officia nisi cupidatat deserunt. Consectetur ad nostrud voluptate aliquip ad aliquip. Reprehenderit mollit ea irure nulla do. Dolore elit occaecat ut qui ad velit voluptate ex.
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
