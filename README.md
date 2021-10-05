BEFORE ANYTHING:

pip3 install Flask-SQLAlchemy psycopg2<br>
touch env.py


BEFORE DEPLOYMENT:

pip3 freeze --local > requirements.txt<br>
echo web: python run.py > Procfile
