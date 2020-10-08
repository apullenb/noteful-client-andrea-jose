import React from 'react'

const NotesContext = React.createContext({
    notes: [],
    folders: [],
    name: {
        value: "hello",
        touched: false
      }
})

export default NotesContext