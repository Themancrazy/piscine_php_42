
SELECT last_name, first_name, SUBSTRING(birthdate, 1, 10) AS 'birthdate'
FROM user_card
WHERE SUBSTRING(birthdate, 1, 4) LIKE '1989'
ORDER BY last_name;