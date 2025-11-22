exports.up = function (knex) {
    return knex.schema.createTable("historico", (table) => {
        table.increments("id").primary();
          // Morador referenciado
        table.integer('morador_Id').unsigned().notNullable();
        table.foreign('morador_Id').references('id').inTable('moradores');

        // Mercado referenciado
        table.integer('mercado_Id').unsigned().notNullable();
        table.foreign('mercado_Id').references('id').inTable('mercados');

        table.timestamp("data").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("historico");
};
