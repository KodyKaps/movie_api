-- Table: public.genres

-- DROP TABLE IF EXISTS public.genres;

CREATE TABLE IF NOT EXISTS public.genres
(
    genreid integer NOT NULL DEFAULT nextval('genres_genreid_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(1000) COLLATE pg_catalog."default",
    CONSTRAINT genres_pkey PRIMARY KEY (genreid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.genres
    OWNER to postgres;

-- Table: public.directors

-- DROP TABLE IF EXISTS public.directors;

CREATE TABLE IF NOT EXISTS public.directors
(
    directorid integer NOT NULL DEFAULT nextval('directors_directorid_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    bio character varying(1000) COLLATE pg_catalog."default",
    birthyear date,
    deathyear date,
    CONSTRAINT directors_pkey PRIMARY KEY (directorid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.directors
    OWNER to postgres;



CREATE TABLE IF NOT EXISTS public.movies
(
    movieid integer NOT NULL DEFAULT nextval('movies_movieid_seq'::regclass),
    title character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(1000) COLLATE pg_catalog."default",
    directorid integer NOT NULL,
    genreid integer NOT NULL,
    imageurl character varying(300) COLLATE pg_catalog."default",
    featured boolean,
    CONSTRAINT movies_pkey PRIMARY KEY (movieid),
    CONSTRAINT directorkey FOREIGN KEY (directorid)
        REFERENCES public.directors (directorid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT genrekey FOREIGN KEY (genreid)
        REFERENCES public.genres (genreid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.movies
    OWNER to postgres;


CREATE TABLE Users (
  UserID serial PRIMARY KEY,
  Username varchar(50) NOT NULL,
  Password varchar(50) NOT NULL,
  Email varchar(50) NOT NULL,
  Birth_date date
);

CREATE TABLE User_Movies (
  UserMovieID serial PRIMARY KEY,
  UserID integer,
  MovieID integer,
  CONSTRAINT UserKey FOREIGN KEY (UserID)
    REFERENCES Users(UserID),
  CONSTRAINT MovieKey FOREIGN KEY (MovieID)
    REFERENCES Movies(MovieID)
);

    