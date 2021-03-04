from flask import Flask

from main import index
from login.routes import login
from register.routes import register
from logout.routes import logout

## Initialize flask application
app = Flask(__name__)
app.secret_key = 'fywugeg9f3gof78'

# Blueprints
app.register_blueprint(index)
app.register_blueprint(register, url_prefix="/register")
app.register_blueprint(login, url_prefix="/login")
app.register_blueprint(logout, url_prefix="/logout")

## Run
if __name__ == '__main__':
    app.run()
