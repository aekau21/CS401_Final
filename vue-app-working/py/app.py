from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Timeline, Comparative, Thematic
from config import Config
from flask import request

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)
@app.route('/')
def index():
    return "Flask API is running."


#  TIMELINE API ROUTE
@app.route('/api/timeline', methods=['GET'])
def get_timeline():
    records = Timeline.query.all()
    return jsonify([
        {
            "id": r.id,
            "dynasty": r.dynasty,
            "emperor_name": r.emperor_name,
            "dates_ruled": r.dates_ruled,
            "notable_events": r.notable_events,
            "wars": r.wars,
            "advancements": r.advancements,
            "treaties": r.treaties
        } for r in records
    ])




# COMPARATIVE API ROUTE
@app.route('/api/comparative', methods=['GET'])
def get_comparative():
    records = Comparative.query.all()
    return jsonify([
        {
            "id": r.id,
            "category": r.category,
            "subcategory": r.subcategory,
            "han_description": r.han_description,
            "nerva_description": r.nerva_description,
            "similarities": r.similarities,
            "differences": r.differences
        } for r in records
    ])


# THEMATIC API ROUTE
@app.route('/api/thematic', methods=['GET'])
def get_thematic():
    records = Thematic.query.all()
    return jsonify([
        {
            "id": r.id,
            "theme": r.theme,
            "dynasty": r.dynasty,
            "theme_description": r.theme_description,
            "example_events": r.example_events,
            "associated_figures": r.associated_figures
        } for r in records
    ])

<<<<<<< HEAD
# POST TIMELINE ENTRY
@app.route('/api/timeline', methods=['POST'])
def create_timeline():
    try:
        data = request.get_json()
        new_record = Timeline(
            dynasty=data.get('dynasty'),
            emperor_name=data.get('emperor_name'),
            dates_ruled=data.get('dates_ruled'),
            notable_events=data.get('notable_events'),
            wars=data.get('wars'),
            advancements=data.get('advancements'),
            treaties=data.get('treaties')
        )
        db.session.add(new_record)
        db.session.commit()
        return {"message": "Timeline record created successfully."}, 201
    except Exception as e:
        return {"error": str(e)}, 400

# DELETE TIMELINE ENTRY
@app.route('/api/timeline/<int:id>', methods=['DELETE'])
def delete_timeline(id):
    try:
        record = db.session.get(Timeline, id)
        if record is None:
            return {"error": f"Timeline record {id} not found."}, 404
        db.session.delete(record)
        db.session.commit()
        return {"message": f"Timeline record {id} deleted successfully."}, 200
    except Exception as e:
        return {"error": str(e)}, 400

=======
#Add a timeline, POST
@app.route('/api/timeline', methods=['POST'])
def create_timeline():
    data = request.get_json()
    new = Timeline(
        dynasty=data['dynasty'],
        emperor_name=data['emperor_name'],
        dates_ruled=data['dates_ruled'],
        notable_events=data['notable_events'],
        wars=data['wars'],
        advancements=data['advancements'],
        treaties=data['treaties']
    )
    db.session.add(new)
    db.session.commit()
    return jsonify({"message": "Timeline created"}), 201

#Delete a Timeline
@app.route('/api/timeline/<int:id>', methods=['DELETE'])
def delete_timeline(id):
    timeline = db.session.get(Timeline, id)
    if not timeline:
        return jsonify({"error": "Timeline not found"}), 404
    db.session.delete(timeline)
    db.session.commit()
    return jsonify({"message": "Deleted successfully"})
>>>>>>> e9f1866e44ee7d3b7b90cbe5d5a2ae554cb042e0

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)