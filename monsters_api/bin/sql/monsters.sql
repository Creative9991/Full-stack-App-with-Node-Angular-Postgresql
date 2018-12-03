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
CREATE TABLE lives(
    monsters character varying(50),
    habitats character varying(50)
);
INSERT INTO monsters(name, personality)
VALUES 
('fluffy', 'agrresive'),
('Noddles', 'impatient'),
('Rusty', 'passionate');
INSERT INTO habitats(name, climate, temperature)
VALUES 
('desert', 'dry', 100),
('forest', 'haunted', 70 ),
('mountain', 'icy', 30);
INSERT INTO lives(monsters, habitats)
VALUES 
('Fluffy', 'desert'),
('Noddles', 'forest'),
('Rusty', 'mountain');