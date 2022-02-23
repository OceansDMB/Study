from flask import Flask, request, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/news", methods=['GET', 'POST'])
def news():
    news_data = dict()
    news_data['info'] = '최근 소식: 풀스택 Part2 강의 오픈'
    news_data['status'] = True
    print(news_data)
    if request.method == 'POST':
        print('POST')
        data = request.get_json()
        print(data)
        print(data['email'])
    if request.method == 'GET':
        print('GET')
        user = request.args.get('email')
        print(user)

    return make_response(jsonify(news_data), 200)


if __name__ == '__main__':
    app.run(host="127.0.0.1", port="8082")
