select * from genres limit 1;

select * from movies where genreid in (select genreid from genres limit 1);

update users set email = 'joe@example.com' where username = 'user1';

select * from users;
--We have ten movies before delete
delete from movies where title = 'Kill Bill: Volume 1';
--Now we have nine movies
select * from movies;