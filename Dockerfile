FROM python:3

# Add scripts
ADD . /django-app

WORKDIR /django-app

# Install dependêncies
RUN pip install -r requirements.txt

CMD ["python", "./leadmanager/manage.py runserver"]