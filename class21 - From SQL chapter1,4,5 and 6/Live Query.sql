/*
 Author Name: Muhammad Qasim
 Crated : 14-Nov-2021
 Description: For Bootcamp2021 
 */

create table students(
student_id int not null,
name varchar(255),
dob date,
course varchar(255),
fee int,
primary key (student_id)
);

insert into students
values(1,'Mansoor','2000-01-01', 'A.I', 2500),
(2,'Ali','2001-01-01', 'A.I', 2500),
(3,'Akif','2002-01-01', 'Blockchain', 2500),
(4,'Tariq','2003-01-01', 'C.C', 1500);

-- select all columns from students table
select * from students;

SELECT  *
FROM
students
limit 2;


select 
	dob,
	student_id, 
	name,
	fee 
from
	students
order by
	dob desc,
	student_id desc;

--Aliases
select 
dob as dateofbirth
from students 

select 
dob dateofbirth
from students 

select 
dob as "date of birth"
from students 

select * from students
where 
student_id > 2

select * from students
where 
  student_id between 3 and 10;
 
 --
 select student_id, name, dob, fee - 100
 from students
 where 
 course = 'A.I'
 
 select *
 from students
 where 
 course = 'A.I'
 
 
  select *
 from students
 where 
 course = 'A.I' or course='Blockchain'
 
  select *
 from students
 where 
 course IN ('A.I' ,'Blockchain')
 
  select name, format(dob,'Y')
 from students
 where 
 course = 'A.I'
 
 
 select  * from students 
 where 
 name like 'A%'
 
 select  * from students 
 where 
 name like '%i%'
 
 
 
 select  
 	student_id,
 	name,
 	dob,
 	case
	 	when course = 'A.I' then 'Artificial Ingelligent'
	 	when course = 'C.C' then 'Cloud Computing'
	 	when course = 'Blockchain' then 'Block chain'
 	end as "Course Name"
 	
 from 
 	students 
  

	



