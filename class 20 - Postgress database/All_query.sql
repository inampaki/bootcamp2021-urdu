create table TEACHERS(
teacher_id int not null unique,
teacher_name varchar(255),
course varchar(255),
primary key(teacher_id)
);

select * from teachers;

insert into teachers(teacher_id, teacher_name, course) 
values (1, 'Sir Inam ul Haq','Bootcamp 2021');

insert into teachers 
values (2, 'Muhammad Qasim','Bootcamp 2021');


create table students(
student_id int not null unique,
student_name varchar(255),
teacher_id int not null,
primary key(student_id),
foreign key (teacher_id) references teachers(teacher_id)
);

create table course(
course_id int unique not null,
course_name varchar(255),
primary key(course_id)
);

insert into course
values 
(1,'Bootcamp-2021'),
(2,'Artificial Ingelligence');

select * from students

insert into students 
values (1,'Hamza',1),
(2, 'Rao Akif', 2);

-- it will generate error
insert into students values(3,'Mansoor',100)
;

-- update teacher table or remove course column
alter table teachers 
drop column course;

alter table teachers 
add column course_id int

alter table teachers 
add foreign key (course_id) references course(course_id);


update teachers 
set course_id=2
where teacher_id = 2


# Joining

select * from 
students s,
teachers t,
course c
where 
s.teacher_id = t.teacher_id
and c.course_id = t.course_id


select t.teacher_name,s.* , c.course_name from 
students s,
teachers t,
course c
where 
s.teacher_id = t.teacher_id
and c.course_id = t.course_id

select * from teachers t
left outer join students s
on t.teacher_id = s.teacher_id;




