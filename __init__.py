from flask import Flask, session

from .main import index
from .login.routes import login
from .register.routes import register
from .logout.routes import logout
from .user.routes import user
from .Following.routes import Following

## Initialize flask application
app = Flask(__name__)
app.secret_key = 'fywugeg9f3gof78'

# Blueprints
app.register_blueprint(index)
app.register_blueprint(register, url_prefix="/register")
app.register_blueprint(login, url_prefix="/login")
app.register_blueprint(logout, url_prefix="/logout")
app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(Following, url_prefix="/Following")

@app.context_processor
def utility_processor():

    if 'loggedIn' in session:

        loggedIn = ('true' if 'loggedIn' in session else 'false')
        userid = session['id'] if 'id' in session else ''
        username = session['username'] if 'username' in session else ''

        return dict(
            loggedIn=loggedIn,
            userid=userid,
            username=username
        )
    else:
        return dict();

## Run
if __name__ == '__main__':
    app.run()
