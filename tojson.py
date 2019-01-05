wordTuple = []
with open('words.txt', 'r') as f:
    for line in f:
        tmp = line.split(',',1)
        word = tmp[0]
        definition = tmp[1]
        wordTuple.append((word, definition))

## at this point wordTuple is a tuple with word in [0] and definition in [1]
for word in wordTuple:

    print(wordTuple[0][0])

""" def convert_to_json(): """
    