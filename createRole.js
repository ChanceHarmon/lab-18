const Role = require('./src/model/role');

const capabilities = {
  admin: ['create', 'read', 'update', 'delete', 'superuser'],
  editor: ['create', 'read', 'update'],
  user: ['read'],
};

let admin = new Role({ role: 'admin', capabilities: capabilities.admin });
let editor = new Role({ role: 'editor', capabilities: capabilities.editor });
let user = new Role({ role: 'user', capabilities: capabilities.user });

admin.save()
  .then(role => {
    console.log('admin created', role);
  })
  .catch(err => {
    console.log(err);
  });
editor.save()
  .then(role => {
    console.log('editor created', role);
  })
  .catch(err => {
    console.log(err);
  });
user.save()
  .then(role => {
    console.log('user created', role);
  })
  .catch(err => {
    console.log(err);
  });