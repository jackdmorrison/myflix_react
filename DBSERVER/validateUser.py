from flask import Flask, redirect, url_for, request,make_response
import os
import datetime
import hashlib
import mysql.connector
import jwt
mydb = mysql.connector.connect(
    host="localhost",
    user='root',
    password=os.getenv('SQL_password'),
    database='USERS'
)
mycursor = mydb.cursor()
service = Flask(__name__)
@service.route('/validate',methods = ['POST'])
def validate():
    if(request.method == 'POST'):
        email= request.form['Email']
        password=request.form['Password']
        passwordHash=hashlib.md5(password.encode())
        if (email!=None and password!=None):
            query="SELECT * FROM user_data WHERE userEmail=%s"
            email=(email,)
            mycursor.execute(query,email)
            myresult=mycursor.fetchone()
            if(passwordHash.hexdigest()==myresult[2]):
                token=encode_auth_token(myresult[0])
                resp= redirect("http://63.35.237.119/catalogue", code=302)
                resp.set_cookie('authToken',token)
                return resp
@service.route('/test')
def test_():
    print("hello")
    return redirect('http://63.35.237.119/catalogue',code=302)
def encode_auth_token( user_id):
    secret=os.getenv("SECRET_KEY")
    payload={'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),'iat': datetime.datetime.utcnow(),'sub': user_id}
    encoded_jwt = jwt.encode(payload, secret, algorithm="HS256")
    return encoded_jwt

if __name__ =='__main__':
    port= int (os.environ.get('PORT',5000))
    service.run(host='0.0.0.0', port=port)