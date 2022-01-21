FROM python:3.7-slim

COPY ./requirements.txt .
RUN mkdir app
RUN pip install -r requirements.txt
RUN pip install -U --no-deps text2text
RUN pip install "uvicorn[standard]"

COPY ./api.py .

CMD ["uvicorn", "api:app","--reload"]
