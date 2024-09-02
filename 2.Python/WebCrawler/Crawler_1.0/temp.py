strinput = input()

arr1 = [0]*len(strinput)
for i in range(0, len(strinput)):
    arr1[i] = strinput[i]
findinput = int(input())
print(arr1[findinput-1])
