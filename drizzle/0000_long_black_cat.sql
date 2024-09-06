CREATE TABLE IF NOT EXISTS "Lendana_bio_data" (
	"id" varchar(21) PRIMARY KEY NOT NULL,
	"user_id" varchar(21) NOT NULL,
	"nik" varchar(16) NOT NULL,
	"fullname" varchar(255) NOT NULL,
	"gender_id" integer,
	"bloodtype_id" integer,
	"marital_id" integer,
	"placeofbirth_id" integer,
	"dateofbirth" varchar(10),
	"religion_id" integer,
	"nationality_id" integer,
	"updated_at" timestamp,
	CONSTRAINT "Lendana_bio_data_nik_unique" UNIQUE("nik")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_bloodtypes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_email_verification_codes" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(21) NOT NULL,
	"email" varchar(255) NOT NULL,
	"code" varchar(8) NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	CONSTRAINT "Lendana_email_verification_codes_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_genders" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_marital_statuses" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_nationalities" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_password_reset_tokens" (
	"id" varchar(40) PRIMARY KEY NOT NULL,
	"user_id" varchar(21) NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_place_of_births" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_posts" (
	"id" varchar(15) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"excerpt" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"status" varchar(10) DEFAULT 'draft' NOT NULL,
	"tags" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_religions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_sessions" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(21) NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lendana_users" (
	"id" varchar(21) PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"discord_id" varchar(255),
	"email" varchar(255) NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"hashed_password" varchar(255),
	"avatar" varchar(255),
	"stripe_subscription_id" varchar(191),
	"stripe_price_id" varchar(191),
	"stripe_customer_id" varchar(191),
	"stripe_current_period_end" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	CONSTRAINT "Lendana_users_discord_id_unique" UNIQUE("discord_id"),
	CONSTRAINT "Lendana_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "biodata_user_idx" ON "Lendana_bio_data" USING btree ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "bloodtype_name_idx" ON "Lendana_bloodtypes" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "verification_code_user_idx" ON "Lendana_email_verification_codes" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "verification_code_email_idx" ON "Lendana_email_verification_codes" USING btree ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "gender_name_idx" ON "Lendana_genders" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "marital_status_name_idx" ON "Lendana_marital_statuses" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "nationality_name_idx" ON "Lendana_nationalities" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "password_token_user_idx" ON "Lendana_password_reset_tokens" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "place_of_birth_name_idx" ON "Lendana_place_of_births" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "post_user_idx" ON "Lendana_posts" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "post_created_at_idx" ON "Lendana_posts" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "religion_name_idx" ON "Lendana_religions" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "session_user_idx" ON "Lendana_sessions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_email_idx" ON "Lendana_users" USING btree ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_discord_idx" ON "Lendana_users" USING btree ("discord_id");