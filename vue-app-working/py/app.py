from flask import Flask, jsonify
from flask_cors import CORS
from models import db, Timeline, Comparative, Thematic
from config import Config

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

if __name__ == '__main__':
    app.run(debug=True)
