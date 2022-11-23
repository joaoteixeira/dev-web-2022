const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller de Chamados

async function list(request, response) {

  const chamados = await prisma.chamado.findMany();

  response.render('chamado/listagem', { listaChamados: chamados});
}

function show(request, response) {
  const { id } = request.params;

  response.send('chamado ID: ' + id);
}

function create_form(request, response) {
  response.render('chamado/abrir-form');
}

async function create(request, response) {

  const { inputAssunto, inputDescricao } = request.body;

  const result = await prisma.chamado.create({
    data: {
      assunto: inputAssunto,
      descricao: inputDescricao
    }
  });

  response.redirect('/chamados');
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