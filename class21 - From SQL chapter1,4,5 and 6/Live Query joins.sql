-- Left Join
select * from 
students s left join teachers t
on 
s.teacher_id = t.teacher_id 

select * from 
students s left join teachers t
on s.teacher_id = t.teacher_id
left join course c 
on t.course_id = c.course_id 


select 
	t.teacher_name "TeacherName",
	s.student_name "Student Name",
	t.course_id
	
from 
students s left join teachers t
on 
s.teacher_id = t.teacher_id 





