import pytest
from app import app, db, Timeline

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client

def test_get_timeline(client):
    res = client.get('/api/timeline')
    assert res.status_code == 200

def test_get_comparative(client):
    res = client.get('/api/comparative')
    assert res.status_code == 200

def test_get_thematic(client):
    res = client.get('/api/thematic')
    assert res.status_code == 200

def test_post_timeline(client):
    payload = {
        "dynasty": "Test",
        "emperor_name": "Delete Me",
        "dates_ruled": "1-2",
        "notable_events": "None",
        "wars": "None",
        "advancements": "Test Tech",
        "treaties": "None"
    }
    res = client.post('/api/timeline', json=payload)
    assert res.status_code == 201

def test_delete_timeline(client):
    with app.app_context():
        new = Timeline(
            dynasty="Test",
            emperor_name="Delete Me",
            dates_ruled="1-2",
            notable_events="None",
            wars="None",
            advancements="Test Tech",
            treaties="None"
        )
        db.session.add(new)
        db.session.commit()
        new_id = new.id
    res = client.delete(f'/api/timeline/{new_id}')
    assert res.status_code == 200