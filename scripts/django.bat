cd ../backend/django

python -m venv venv
call venv/scripts/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

cmd