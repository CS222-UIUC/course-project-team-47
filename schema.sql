DROP TABLE users;

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (email) VALUES
('tim@yahoo.com'), ('linda@gmail.com');

-- INSERT INTO users (email, created_at) VALUES
-- ('Julia@hotmail.com', '2022-11-17T21:06:32.078Z');