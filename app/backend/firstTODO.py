from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = []

@app.route('/todos', methods=['GET'])
def get_todos():
    return jsonify(todos), 200

@app.route('/todos', methods=['POST'])
def add_todo():
    data = request.get_json()

    if not data or "task" not in data:
        return jsonify({"error": "Task is required"}), 400

    todos.append(data["task"])
    return jsonify({"message": "Todo added"}), 201

@app.route('/todos/<int:index>', methods=['DELETE'])
def delete_todo(index):
    if 0 <= index < len(todos):
        todos.pop(index)
        return jsonify({"message": "Todo deleted"}), 200
    else:
        return jsonify({"error": "Invalid index"}), 404

if __name__ == '__main__':
    app.run()