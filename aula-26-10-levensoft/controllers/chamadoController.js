// Controller de Chamados

function list(request, response) {
  response.render('chamado/listagem');
}

function show(request, response) {
  const { id } = request.params;

  response.send('chamado ID: ' + id);
}

function create_form(request, response) {
  response.render('chamado/abrir-form');
}

function create(request, response) {
  response.send('create save');
}

function update_form(request, response) {

  
  response.send('update form');
}

function update(request, response) {
  response.send('update save');
}

function _delete_form(request, response) {
  response.send('delete form');
}

function _delete(request, response) {
  response.send('delete save');
}

module.exports = { list, show, create_form, create, update_form, update, _delete, _delete_form }