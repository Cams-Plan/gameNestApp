DROP TABLE IF EXISTS leaderboard_minesweeper;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_number INT GENERATED ALWAYS AS IDENTITY,
    user_id uuid DEFAULT gen_random_uuid(),
    user_email VARCHAR(50),
    username VARCHAR(30) NOT NULL,
    user_password VARCHAR(25) NOT NULL,
    PRIMARY KEY (user_id)
);

INSERT INTO users (username, user_email, user_password, user_id)
VALUES 
    ('Bob', 'bob@gmail.com', 'bobPassword', 'cd5dac32-2655-4c04-8eac-a1a834e15f0d'), 
    ('Tom', 'tom@gmail.com', 'tomPassword', '254887ee-2c7f-4f6b-b236-64f06f9b48f1');

CREATE TABLE leaderboard_minesweeper (
    player_number INT GENERATED ALWAYS AS IDENTITY,
    player_name VARCHAR(30) NOT NULL,
    player_id uuid NOT NULL,
    leaderboard_entry_id uuid DEFAULT gen_random_uuid(),
    spaces_cleared INT NOT NULL,
    time_taken TIME DEFAULT '00:00:00',
    time_stamp timestamptz NOT NULL,
    PRIMARY KEY (leaderboard_entry_id),
    FOREIGN KEY (player_id) REFERENCES users(user_id)
);

INSERT INTO leaderboard_minesweeper (player_name, player_id, spaces_cleared, time_taken, time_stamp)
VALUES 
    ('Bob', 'cd5dac32-2655-4c04-8eac-a1a834e15f0d', 10, '00:00:20', LOCALTIMESTAMP), 
    ('Tom', '254887ee-2c7f-4f6b-b236-64f06f9b48f1', 100, '00:02:34', LOCALTIMESTAMP),
    ('Bob', 'cd5dac32-2655-4c04-8eac-a1a834e15f0d', 70, '00:05:00', LOCALTIMESTAMP), 
    ('Tom', '254887ee-2c7f-4f6b-b236-64f06f9b48f1', 50, '00:01:34', LOCALTIMESTAMP);