const { addNoteHandler, getAllNotesHandler, getDetailNoteHandler, editNoteHandler, deleteNotesHandler } = require('./handler.js');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  // GET all notes
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  // GET detail note
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getDetailNoteHandler,
  },

  // Edit Note Using PUT
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteHandler,
  },

  // Delete Note Using DELETE
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesHandler,
  }
];

module.exports = routes;
