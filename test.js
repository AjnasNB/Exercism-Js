

def check_alphabets(sentence):
    # Convert the sentence to lowercase
    sentence = sentence.lower()

    # Remove spaces and punctuation marks
    sentence = sentence.replace(" ", "").translate(str.maketrans("", "", string.punctuation))

    # Check if all the letters of the alphabet are present
    return set(sentence) == set(string.ascii_lowercase)

# Example usage
sentence = "The quick brown fox jumps over the lazy dog."
if check_alphabets(sentence):
    print("The sentence contains all the alphabets.")
else:
    print("The sentence does not contain all the alphabets.")
