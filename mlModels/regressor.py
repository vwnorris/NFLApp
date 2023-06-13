import math 
import tensorflow as tf

from tensorflow import keras
from tensorflow.python.keras.layers import Dense
import pandas as pd
import random


# Load the data
data = pd.read_excel('crashCourse/mlModels/activeStatsFilled.xlsx')
print(data)

predData = pd.read_excel('crashCourse/mlModels/rookiesFilled.xlsx')
print(predData)

rookies = predData.drop(['score', 'Name', 'wAv', 'draftYear', 'Yas', 'ProGames', 'yrs', 'totwAv'], axis=1)
print(rookies)

# Assuming 'rating' is the name of your target column
target = data['score']
target2 = data['wAv']

# Drop the target column from the original data to get your input features
features = data.drop(['score', 'Name', 'wAv', 'draftYear', 'Yas', 'ProGames', 'yrs', 'totwAv'], axis=1)

# Now, you should split your data into a training set and a testing set
X_train = features[:59]
X_test = features[49:59]
y_train = target2[:59]
y_test = target2[49:59]

# Define your model architecture
model = keras.Sequential()

# Input Layer: Since you have 10 attributes, input_dim will be 10
model.add(Dense(32, input_dim=18, activation='sigmoid')) 

# Hidden Layer: You can add as many as you want
model.add(Dense(64, activation='sigmoid')) 
model.add(Dense(64, activation='sigmoid')) 

# Output Layer: Since you're predicting a single value (rating), the output layer has 1 neuron
model.add(Dense(1)) 

# Compile the model
model.compile(loss='mean_squared_error', optimizer='adam', metrics=['mean_squared_error'])

# Train the model
model.fit(X_train, y_train, epochs=800, batch_size=32)

# Evaluate the model
scores = model.evaluate(X_test, y_test)
print("\n%s: %.2f" % (model.metrics_names[1], scores[1]))

predictions = model.predict(rookies)
print(f"predicted score: {predictions}")