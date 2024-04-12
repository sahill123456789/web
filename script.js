let notes = [];
const createNotes = ()=>{
    let title = document.getElementById("title");
    let description= document.getElementById("description");
    const note = {
        title:title.value,
        description:description.value,
        date:new Date()
    }
    notes.push(note);
    renderNotes();
}
const renderNotes = ()=>{
    const noteList = document.getElementById("createdNotes");
    noteList.innerHTML='';
    notes.forEach((note,index)=>{
        const li = document.createElement('li');
        li.textContent = note.title;
        const btn = document.createElement('button')
        btn.onclick =()=>deletenote(index);
        btn.innerHTML = 'delete';
        li.appendChild(btn)
        noteList.appendChild(li);
        })
}
const deletenote = (index) => {
    notes.splice(index,1);
    renderNotes();
}