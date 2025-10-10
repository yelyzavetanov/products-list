CREATE SCHEMA "business";
--> statement-breakpoint
CREATE SCHEMA "content";
--> statement-breakpoint
CREATE TABLE "business"."order_options" (
	"id" text PRIMARY KEY NOT NULL,
	"option" text
);
