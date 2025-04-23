from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Timeline(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    dynasty = db.Column(db.String(50))
    emperor_name = db.Column(db.String(100))
    dates_ruled = db.Column(db.String(50))
    notable_events = db.Column(db.Text)
    wars = db.Column(db.Text)
    advancements = db.Column(db.Text)
    treaties = db.Column(db.Text)

class Comparative(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50))
    subcategory = db.Column(db.String(100))
    han_description = db.Column(db.Text)
    nerva_description = db.Column(db.Text)
    similarities = db.Column(db.Text)
    differences = db.Column(db.Text)

class Thematic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    theme = db.Column(db.String(50))
    dynasty = db.Column(db.String(50))
    theme_description = db.Column(db.Text)
    example_events = db.Column(db.Text)
    associated_figures = db.Column(db.Text)