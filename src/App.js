import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Navbar'
//import { API, Storage } from 'aws-amplify'
//import { listTodos } from './graphql/queries'
//import { createTodo as createNoteMutation, deleteTodo as deleteNoteMutation } from './graphql/mutations'


function App() {
    return (
        <div className="App">
            <Header/>
        </div>
  );
}
/*const initialFromState = { name:'', description: ''}
function App() {
  const [notes, setNotes] = useState([])
  const [formData, setFormData] = useState(initialFromState)

  useEffect(() => {
    fetchNotes()
  }, [])
  async function fetchNotes() {
    const apiData = await API.graphql({ query: listTodos})
    const noteFromAPI = apiData.data.listTodos.items
    await Promise.all(noteFromAPI.map(async todo => {
        if (todo.image){
            const image = await Storage.get(todo.image)
            todo.image=image
        }
        return todo
    }))
    setNotes(apiData.data.listTodos.items)
  }
  async function createNote() {
    if (!formData.name || !formData.description) return
    await API.graphql({ query: createNoteMutation, variables: {input: formData}})
    if (formData.image) {
        const image = await Storage.get(formData.image)
        formData.image = image
    }
    setNotes([...notes, formData])
    setFormData(initialFromState)
  }
  async function deleteNote({id}){
    const newNotesArray = notes.filter(note => note.id !== id)
    setNotes(newNotesArray)
    await API.graphql({quert: deleteNoteMutation, variables: {input: {id}}})
  }
  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0]
    setFormData({...formData, image: file.name})
    await Storage.put(file.name, file)
    fetchNotes()
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from AWS</h1>
      </header>
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({...formData, 'name':e.target.value})}
        placeholder="Note"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({...formData, 'description': e.target.value})}
        placeholder='Note description'
        value={formData.description}
      />
      <input
        type='file'
        onChange={onChange}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
            notes.map(note => (
                <div key={note.id ||note.name}>
                    <h2>{note.name}</h2>
                    <p>{note.description}</p>
                    <button onClick={() => deleteNote(note)}>Delete note</button>
                    {
                        note.image && <img src={note.image} style={{width: 400}}/>
                    }
                </div>
            ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}
*/
export default App;
