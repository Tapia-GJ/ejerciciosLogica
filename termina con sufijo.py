def ends_with_suffix(s: str, suffix: str) -> bool:
    i = len(suffix) - 1
    j = len(s) - 1
    while(i >= 0):
        print("s : ", s[j])
        print("suffix: ", suffix[i])
        if(s[j] != suffix[i]):
            return False
        i-=1
        j-=1
    return True

print(ends_with_suffix("hola mundo", "mundo"))  # True
            