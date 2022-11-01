# Yoruba-Translate

This is an app intended accept text in the yoruba language, perform intent classification on accepted text, and from the classified intent perform some operations on IOT devices.

This is achieved by implementing a neural network that trains on the yoruba text which has been preprocessed, getting the model and transforming it into a JavaScript format to make it usable on the web.

## About the Stack

### Data Preprocessing and Modeling

Tasks relating to the data preprocessing and modeling will be found primarily in `Modeling`, in which we can also find:

  1. `chat_model`: A folder containing the python loadable keras model
  2. `tokenizer.json`: A json file containing the configuration for the tokenizer used in text preprocessing.
  3. `word_dict.json`: A json file containing the mappings of words and their sequences.
  4. `model.ipynb`: A jupyter notebook showing the preprocessing and modeling of the neural network.

### Frontend

Tasks relating to the use of the model on the web are implemented in:

  1. `index.html`: This holds the basic site structure.
  2. `test.js`: This holds the logic that classifies intent from predicted text.
