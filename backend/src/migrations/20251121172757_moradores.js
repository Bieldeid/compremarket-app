exports.up = function(knex) {
    return knex.schema.createTable('moradores', function (table){
        table.increments('id').primary();
        table.integer("mercado_id").unsigned().references("id").inTable("mercados").onDelete("CASCADE");
        table.string('nome').notNullable
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('apartamento').notNullable();
        table.string('observacao').notNullable;
        table.string('foto_normal');
        table.string('foto_neutra');
        table.date('dataEntrada').defaultTo(knex.fn.now());

    })
  
};
exports.down = function(knex) {
  return knex.schema.dropTable('moradores')
};