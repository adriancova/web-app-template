// define whatever db / persistance mechanism you'd like to use as an example I'm using sqlite with drizzle orm
// https://www.sqlite.org/index.html
// https://orm.drizzle.team/docs/overview

import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('./sqlite.db');
const db = drizzle(sqlite);

export default db;
