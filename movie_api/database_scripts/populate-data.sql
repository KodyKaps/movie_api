-- Insert data into genres table
INSERT INTO public.genres (name, description) VALUES
('Action', 'Action movies often include intense physical activity and heroic feats.'),
('Comedy', 'Comedy movies are designed to make the audience laugh.'),
('Drama', 'Drama movies focus on emotional development and conflict.');

-- Insert data into directors table
INSERT INTO public.directors (name, bio, birthyear, deathyear) VALUES
('Steven Spielberg', 'An American filmmaker known for making some of the most popular and critically acclaimed films of all time.', '1946-12-18', NULL),
('Christopher Nolan', 'British-American film director known for his complex narratives.', '1970-07-30', NULL),
('Quentin Tarantino', 'An American filmmaker known for his stylized films with nonlinear storytelling.', '1963-03-27', NULL);

-- Insert data into movies table
INSERT INTO public.movies (title, description, directorid, genreid, imageurl, featured) VALUES
('Jurassic Park', 'A groundbreaking film about genetically engineered dinosaurs.', 1, 1, 'https://example.com/jurassic_park.jpg', true),
('Schindler''s List', 'A historical drama about the Holocaust.', 1, 3, 'https://example.com/schindlers_list.jpg', true),
('Inception', 'A science fiction film that explores dream invasion.', 2, 1, 'https://example.com/inception.jpg', true),
('The Dark Knight', 'Batman faces off against the Joker in this action-packed thriller.', 2, 1, 'https://example.com/dark_knight.jpg', true),
('Pulp Fiction', 'A nonlinear narrative about crime in Los Angeles.', 3, 3, 'https://example.com/pulp_fiction.jpg', true),
('Django Unchained', 'A western about a freed slave who seeks revenge.', 3, 1, 'https://example.com/django_unchained.jpg', true),
('The Prestige', 'Two magicians engage in a bitter rivalry.', 2, 3, 'https://example.com/prestige.jpg', false),
('Saving Private Ryan', 'A gritty depiction of World War II.', 1, 3, 'https://example.com/saving_private_ryan.jpg', true),
('Interstellar', 'A team of explorers travel through a wormhole in space.', 2, 3, 'https://example.com/interstellar.jpg', false),
('Kill Bill: Volume 1', 'A former assassin seeks revenge on her old associates.', 3, 1, 'https://example.com/kill_bill_vol1.jpg', true);

-- Insert data into Users table
INSERT INTO Users (Username, Password, Email, Birth_date) VALUES
('user1', 'password1', 'user1@example.com', '1990-05-10'),
('user2', 'password2', 'user2@example.com', '1985-07-15'),
('user3', 'password3', 'user3@example.com', '1995-09-20');

-- Insert data into User_Movies table
INSERT INTO User_Movies (UserID, MovieID) VALUES
(1, 1),
(1, 2),
(2, 5),
(2, 6),
(3, 3),
(3, 9);
