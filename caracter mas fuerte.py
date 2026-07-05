# Carácter más frecuente
# Dada una cadena de texto no vacía, devuelve el carácter que aparece con mayor frecuencia. Si hay empate, devuelve el que aparezca primero en la cadena.

# Ejemplos
# most_frequent_char("aabbbc")  # "b"
# most_frequent_char("abcd")    # "a"  # empate, primero en la cadena
# most_frequent_char("zzz")     # "z"
# Notas
# La cadena siempre tendrá al menos un carácter.
# En caso de empate en frecuencia, devuelve el carácter que aparece primero en la cadena.
# Los espacios también cuentan como caracteres.


#! Primera forma de como resolverlo
# def most_frequent_char(text: str) -> str:
#     diccionario = {}
#     max_value = 0
#     caracter= ""
#     for caracter in text:
#         diccionario[caracter] = diccionario.get(caracter, 0) + 1
#     for item in diccionario:
#         if diccionario[item] > max_value:
#             max_value = diccionario[item]
#             caracter = item
#     return caracter

#! Forma mas corta
def most_frequent_char(text: str) -> str:
    return max(text, key=text.count)
    
print(most_frequent_char("aabbbc"))
print(most_frequent_char("abcd"))