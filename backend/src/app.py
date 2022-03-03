from flask import Flask, jsonify,render_template,request
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity,jwt_required,JWTManager
from models import db,User
from flask_migrate import Migrate

app = Flask(__name__)


app.config['DEBUG']=True
app.config['ENV']='development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///database.db'
app.config['JWT_SECRET_KEY']='hola'
db.init_app(app)
Migrate(app,db)
jwt=JWTManager(app)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/register', methods=['POST'])
def register():
    email = request.json.get('email')
    password = request.json.get('password')

    if email == "":return jsonify({"msg":"debe ingresar un email"}),400
    if password == "":return jsonify({"msg":"debe ingresar una constaseña"}),400

    user = User()
    user.email = email
    user.password = password
    user.save()

    return jsonify({'msg':'usuario registrado'}),200

if __name__=='__main__':
    app.run()