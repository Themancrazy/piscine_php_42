SELECT COUNT(id_film) AS 'movies' FROM member_history
WHERE (SUBSTR(`date`, 1, 10) >= '2006-10-30'
AND SUBSTR(`date`, 1, 10) <= '2007-07-27')
OR (SUBSTR(`date`, 6, 2) = '12'
AND SUBSTR(`date`, 9, 2) = '24');