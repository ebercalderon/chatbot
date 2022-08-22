import random

from flask import jsonify, request
from flask_cors import cross_origin
from app.ml import ml
from app.info import features, questions, answers, questionWithComplete

from flask import Flask, jsonify, request

app = Flask(__name__)



# Home Page
@app.route('/')
def home():
    return "Welcome to backend - chatbot."

# [POST] Response
@app.route('/api/questions/', methods = ['POST'])
@cross_origin()
def getQuestions():
    availableFeatures = features[:]
    characterMatch = None

    if 'alreadyFeatures' in request.json:
        availableFeatures = set(availableFeatures) - set(request.json['alreadyFeatures'])
        characterMatch = ml(request.json['alreadyFeatures'], request.json['params'], request.json['answers'])
        characterMatch = characterMatch.to_dict()

        characterMatchId = 0
        for id in characterMatch['name']:
            characterMatchId = id

        print(characterMatch)
        print(characterMatch['name'][characterMatchId])

        characterMatch = {
          "name": characterMatch['name'][characterMatchId],
          "image": characterMatch['image'][characterMatchId],
          "eye_color": characterMatch['eye_color'][characterMatchId],
          "publisher": characterMatch['publisher'][characterMatchId],
          "place_of_birth": characterMatch['place_of_birth'][characterMatchId]
        }
    else:
        availableFeatures = set(availableFeatures) - set(questionWithComplete)

    availableFeatures = list(availableFeatures)

    if(not len(availableFeatures)):
        return jsonify(
            characterMatch = characterMatch
        )

    feature = random.choice(availableFeatures)
    param = feature
    question = questions[feature]

    if feature in questionWithComplete:
        question += characterMatch[feature] + '?'
        param = 'is_' + characterMatch[feature]

    if characterMatch:
        del characterMatch['eye_color']
        del characterMatch['publisher']
        del characterMatch['place_of_birth']

    return jsonify(
      feature = feature,
      param = param,
      question = question,
      answers = answers[feature],
      characterMatch = characterMatch
    )
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)
