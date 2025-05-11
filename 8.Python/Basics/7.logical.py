# Logical Operators | OR | AND | NOT

temp = 20  #in celcius
is_raining = False

if temp > 35 or temp < 0 or is_raining:  # OR operator
    print("The outdoor event is cancelled")
else:
    print("Outdoor event is still on")

temperature = 28;
is_sunny = True

if temperature >=28 and is_sunny:   #AND Operator
    print("It is HOT outside")
elif temperature <=0 and not is_sunny:  # NOT
    print("It is  Cloudy")
else:
    print("It is SUNNY")

