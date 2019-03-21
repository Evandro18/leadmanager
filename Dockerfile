FROM python:3.7

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

RUN mkdir /django-app

# Set workdir
WORKDIR /django-app

# Add scripts folder
ADD . /django-app

# Install dependêncies
RUN pip install -r requirements.txt
