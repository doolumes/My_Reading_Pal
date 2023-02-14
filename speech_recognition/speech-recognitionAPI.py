
from vosk import Model, KaldiRecognizer
from flask import Flask
from flask_restful import Api, Resource
import asyncio

app = Flask(__name__)
api = Api(app)


class HelloWorld(Resource):
    def get(self, n):
        return {"data": "Hello World"}

    def post(self):
        return {"data": "posted"}


api.add_resource(HelloWorld, "/helloworld/<string:name><int:test>")
if __name__ == "__main__":
    app.run(debug=True)
