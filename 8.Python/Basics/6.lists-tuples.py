#lists [] = are mutable, most flexible

fruits = ["apple", "orange", "banana", "coconut"]
print(fruits[2])

for fruit in fruits:
    print(fruit, end=" ")

#adding to the list
#fruits[0] = "mango" | This replaces the apple
fruits.append("mango")

for fruit in fruits:
    print(fruit, end=" ")

#removing elements
fruits.remove("banana")
print(fruits)
fruits.pop(3) #removing at an index
fruits.clear() #this removes all the elements from the list

# Tuple() = immutable, faster to access the elements
# Tuples do not support item assignment

numbers = ("1", "2", "3","4", "5", "6","7")

#Sets {} = mutable(add/remove), unordered, NO duplicates, best for membership testing

fruits = {"apple", "orange", "banana", "coconut"}
for fruit in fruits:
    print(fruit, end=" ")

#membership testing
if "apple" in fruits:
    print("Apple found")