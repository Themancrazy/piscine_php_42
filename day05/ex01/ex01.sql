CREATE TABLE ft_table (
    id INT(3) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    login varchar[15] DEFAULT 'toto' NOT NULL,
    `group` ENUM('staff', 'student', 'other') NOT NULL,
    creation_date DATE NOT NULL
);