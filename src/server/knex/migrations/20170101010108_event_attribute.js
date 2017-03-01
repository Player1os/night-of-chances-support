import knexMixin from '@/src/server/knex/mixin';

export const up = (originalKnex) => {
	const knex = knexMixin(originalKnex);

	return knex.schema.createTable('event_attribute', (tab) => {
		tab.increments('key')
			.notNullable()
			.primary();
		tab.string('name', 256)
			.unique();
		tab.string('color', 6);
		tab.integer('project_key')
			.notNullable()
			.references('key')
			.inTable('project')
			.onDelete('cascade');
	});
};

export const down = (originalKnex) => {
	const knex = knexMixin(originalKnex);

	return knex.schema.dropTable('event_attribute');
};