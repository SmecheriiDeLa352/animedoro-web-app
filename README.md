# animedoro-web-app

### Steps for running the application

* activate the virtual environment

```console
$virtualenv venv
$source venv/bin/activate
pip install -r requirements.txt
```

* run the frontend development server

```console
$cd frontend
$npm start
```

* run the backend development server

```console
$cd backend
$./manage.py runserver
```

* The database models have been created in the API component folder
* 3 models - Users / Streaming Services / Userpreferences
* The models can be seen and intercated with in the 
*     '/api/user' -> for users
*     '/api/streaming' -> for streaming services
*     '/api/preferences' -> for users preferences (connection table between streaming services and users)
