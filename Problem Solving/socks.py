#https://www.hackerrank.com/challenges/sock-merchant/problem

def socks(n, arr):
    pairs = 0
    w = {}
    for i in range(n):
        if i in w:
            w.pop(arr[i])
            pairs +=1
        else:
            w[arr[i]]=1
    return pairs


n = int(input())
arr = list(map(int, input().rstrip().split()))
result = socks(n, arr)
print(result)
