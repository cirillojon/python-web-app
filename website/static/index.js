// All images, js, or css files will go into static folder

function deleteNote(noteId) {
    fetch('/delete-note', {
        method: "POST",
        body: JSON.stringify({ noteId: noteId})
    }).then((_res) => {
        window.location.href = "/";
    });
}