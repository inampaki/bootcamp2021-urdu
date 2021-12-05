drop table lab_oders, patient_info;

-- Table1
create table lab_oders(
LabOrderNo int,
PatientID int,
primarCareDoctorId int,
text varchar(255),
BloodType varchar(255) unique,
LaboratoryId int,
OrderDate date,
UrgencyLevel varchar(255),
primary key (LabOrderNo),
foreign key (PatientID) references patient_info(PatientID),
foreign key (primarCareDoctorId) references primary_care_doctors(primarCareDoctorId)
);

--Table2
create table patient_info(
PatientID int,
Name varchar(255),
primarCareDoctorId int,
primaryCareDoctorName varchar(255),
DOB date,
height int,
weight int,
BloodType varchar(255),
primary key (PatientId)
);

--Table3
create table primary_care_doctors(
primarCareDoctorId int,
primaryCareDoctorName varchar(255),
EmailAddress varchar(255),
HospitalID int,
YearsInPractice int,
LicenseNo int,
primary key (primarCareDoctorId)
foreign key (HospitalID) references hospitals(HospitalID);
);



--Table4
create table hospitals(
HospitalID int,
HostpitalName varchar(255),
Address varchar(255),
Capacity int,
Specialties varchar(255),
HelicopterAccess Bool,
primary key (HospitalID)
);


-- Define Tables Relationships
alter table lab_orders
add foreign key (PatientID) references patient_info(PatientID),
add foreign key (BloodType) references patient_info(BloodType),
add foreign key (primarCareDoctorId) references primary_care_doctors(primarCareDoctorId)



alter table patient_info 
add foreign key (BloodType) references lab_oders(BloodType);





