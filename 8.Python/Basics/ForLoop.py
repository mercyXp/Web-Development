#For loop = used to iterate over a sequence

for i in range(10):
    print(i)

for i in range(1,11):
    print(i)

for i in range(1,11, 2):  #counting by 2s
    print(i)   

name = "Mercy"

for letter in name:
    print(letter)

#count from 10 down to 0 and display "Happy New Year"
import time

for num in range(10, 0, -1):
    print(num)
    time.sleep(1)
print("Happy New Year")