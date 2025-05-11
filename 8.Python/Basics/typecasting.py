#Type casting is usually useful when handling user input

name = 'Andrew Smith';
gpa = 3.5
age = 24;
is_student = True;

#checking the datatype using type function
print(type(name));
print(type(gpa));
print(type(age));
print(type(is_student));

#type conversion
gpa = int(gpa);
print(gpa);

age = float(age);
print(age);
age = str(age);
print(age);
print(type(age));

name = bool(name);
print(name);

is_student = int(is_student);
print(is_student);
print(type(is_student));