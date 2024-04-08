import { eq, sql } from 'drizzle-orm';
import { text, sqliteTable } from 'drizzle-orm/sqlite-core';
import db from '../db';

export const users = sqliteTable('users', {
	id: text('id'),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text('email'),
	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const getUsers = () => {
	return db.select().from(users);
};

export const insertUser = (user: NewUser) => {
	return db.insert(users).values(user).returning();
};

export const updateUser = (id: string, user: Partial<User>) => {
	return db.update(users).set(user).where(eq(users.id, id)).returning();
};

export const deleteUser = (id: string) => {
	return db.delete(users).where(eq(users.id, id));
};
