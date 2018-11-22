CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);
CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temperature int
);
CREATE TABLE monsters(
    monsters character varying(50),
    habitats character varying(50)
);