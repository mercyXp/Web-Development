#if statements allow for basic decision making

age = int(input("Enter your age: "))
has_ticket = True
price = 10.00

if age >= 18:
    print("You are an adult")
    print(f"The ticket price for a senior citizen is ${price * 0.75}")
elif age < 0:
    print("You are not yet born")
elif age == 0:
    print("You are just born")
else:
    print("You are under age")

if has_ticket:
    print("You may enter")
else:
    print("Buy a ticket")