a = int(input())
for i in range(a):
    r, s = input().split()
    p = ""
    r = int(r)
    for c in s:
        p += c * r
    print(p)
