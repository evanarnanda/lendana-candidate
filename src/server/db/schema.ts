import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  boolean,
  index,
  text,
  timestamp,
  varchar,
  date,
  integer,
} from "drizzle-orm/pg-core";
import { DATABASE_PREFIX as prefix } from "@/lib/constants";

export const pgTable = pgTableCreator((name) => `${prefix}_${name}`);

export const users = pgTable(
  "users",
  {
    id: varchar("id", { length: 21 }).primaryKey(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    discordId: varchar("discord_id", { length: 255 }).unique(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    hashedPassword: varchar("hashed_password", { length: 255 }),
    avatar: varchar("avatar", { length: 255 }),
    stripeSubscriptionId: varchar("stripe_subscription_id", { length: 191 }),
    stripePriceId: varchar("stripe_price_id", { length: 191 }),
    stripeCustomerId: varchar("stripe_customer_id", { length: 191 }),
    stripeCurrentPeriodEnd: timestamp("stripe_current_period_end"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).$onUpdate(() => new Date()),
  },
  (t) => ({
    emailIdx: index("user_email_idx").on(t.email),
    discordIdx: index("user_discord_idx").on(t.discordId),
  }),
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const sessions = pgTable(
  "sessions",
  {
    id: varchar("id", { length: 255 }).primaryKey(),
    userId: varchar("user_id", { length: 21 }).notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull(),
  },
  (t) => ({
    userIdx: index("session_user_idx").on(t.userId),
  }),
);

export const emailVerificationCodes = pgTable(
  "email_verification_codes",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id", { length: 21 }).unique().notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    code: varchar("code", { length: 8 }).notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull(),
  },
  (t) => ({
    userIdx: index("verification_code_user_idx").on(t.userId),
    emailIdx: index("verification_code_email_idx").on(t.email),
  }),
);

export const passwordResetTokens = pgTable(
  "password_reset_tokens",
  {
    id: varchar("id", { length: 40 }).primaryKey(),
    userId: varchar("user_id", { length: 21 }).notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull(),
  },
  (t) => ({
    userIdx: index("password_token_user_idx").on(t.userId),
  }),
);

export const posts = pgTable(
  "posts",
  {
    id: varchar("id", { length: 15 }).primaryKey(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    excerpt: varchar("excerpt", { length: 255 }).notNull(),
    content: text("content").notNull(),
    status: varchar("status", { length: 10, enum: ["draft", "published"] })
      .default("draft")
      .notNull(),
    tags: varchar("tags", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).$onUpdate(() => new Date()),
  },
  (t) => ({
    userIdx: index("post_user_idx").on(t.userId),
    createdAtIdx: index("post_created_at_idx").on(t.createdAt),
  }),
);

export const postRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export const bioDatas = pgTable(
  "bio_data",
  {
    id: varchar("id", { length: 21 }).primaryKey(),
    userId: varchar("user_id", { length: 21 }).notNull(),
    nik: varchar("nik", { length: 16 }).notNull().unique(),
    fullname: varchar("fullname", { length: 255 }).notNull(),
    genderId: integer("gender_id"),
    bloodtypeId: integer("bloodtype_id"),
    maritalId: integer("marital_id"),
    placeofbirthId: integer("placeofbirth_id"),
    dateofbirth: varchar("dateofbirth", { length: 10 }),
    religionId: integer("religion_id"),
    nationalityId: integer("nationality_id"),
    updatedAt: timestamp("updated_at", { mode: "date" }).$onUpdate(() => new Date()),
  },
  (t) => ({
    biodataIdx: index("biodata_user_idx").on(t.id),
  })
);

export const bioDataRelation = relations(bioDatas, ({ one }) => ({
  user: one(users, {
    fields: [bioDatas.userId],
    references: [users.id],
  }),
  gender: one(genders, {
    fields: [bioDatas.genderId],
    references: [genders.id],
  }),
  bloodtype: one(bloodtypes, {
    fields: [bioDatas.bloodtypeId],
    references: [bloodtypes.id],
  }),
  maritalStatus: one(maritalStatuses, {
    fields: [bioDatas.maritalId],
    references: [maritalStatuses.id],
  }),
  placeOfBirth: one(placeOfBirths, {
    fields: [bioDatas.placeofbirthId],
    references: [placeOfBirths.id],
  }),
  religion: one(religions, {
    fields: [bioDatas.religionId],
    references: [religions.id],
  }),
  nationality: one(nationalities, {
    fields: [bioDatas.nationalityId],
    references: [nationalities.id],
  }),
  
}));

export const genders = pgTable(
  "genders",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (t) => ({
    genderNameIdx: index("gender_name_idx").on(t.name),
  }),
);

export const genderRelation = relations(genders, ({ many }) => ({
  bioDatas: many(bioDatas),
}))

export const bloodtypes = pgTable(
  "bloodtypes",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (t) => ({
    bloodtypeNameIdx: index("bloodtype_name_idx").on(t.name),
  }),
);

export const bloodtypeRelation = relations(bloodtypes, ({ many }) => ({
  bioDatas: many(bioDatas),
}))

export const maritalStatuses = pgTable(
  "marital_statuses",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (t) => ({
    maritalStatusNameIdx: index("marital_status_name_idx").on(t.name),
  }),
);

export const maritialStatusRelation = relations(maritalStatuses, ({ many }) => ({
  bioDatas: many(bioDatas),
}))


export const placeOfBirths = pgTable(
  "place_of_births",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (t) => ({
    placeOfBirthNameIdx: index("place_of_birth_name_idx").on(t.name),
  }),
);

export const placeOfBirthRelation = relations(placeOfBirths, ({ many }) => ({
  bioDatas: many(bioDatas),
}))

export const religions = pgTable(
  "religions",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (t) => ({
    religionNameIdx: index("religion_name_idx").on(t.name),
  }),
);

export const religionRelation = relations(religions, ({ many }) => ({
  bioDatas: many(bioDatas),
}));

export const nationalities = pgTable(
  "nationalities",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (t) => ({
    nationalityNameIdx: index("nationality_name_idx").on(t.name),
  }),
);

export const nationalityRelation = relations(nationalities, ({ many }) => ({
  bioDatas: many(bioDatas),
}));