import React from 'react'
import ListBox from './ListBox'


function List() {
  return (
    <div className="ListArea" id="List">
            <div className="flex-box-section">
                <br />
                <ListBox 
                    description="Call for Papers (CFP) Schedule"
                    text="CFP Opens: Thursday, June 16, 2022"
                />
                <ListBox 
                    text="CFP Closes: Tuesday, August 9, 2022 at 11:59 PM PDT"
                />
                <ListBox 
                    text="CFP Notifications: Tuesday, September 6, 2022"
                />
                <ListBox 
                    text="Schedule Announcement: Tuesday, September 27, 2022"
                />
                <ListBox 
                    text="Presentation Slide Due Date: Friday, December 2, 2022"
                />
                <ListBox 
                    text="Event Dates: December 12-15, 2022"
                    textButton="Submit Your Proposal"
                />
            </div>
        </div>
  )
}

export default List