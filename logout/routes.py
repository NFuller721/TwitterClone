from flask import Blueprint, render_template, request, redirect, url_for, session
logout = Blueprint(
    "logout",
    __name__,
    static_folder='static',
)

@logout.route('/', methods=["GET", "POST"])
def index():
    if 'loggedIn' in session:
        session.pop('loggedIn')
        session.pop('username')
        session.pop('password')
        session.pop('id')

        return redirect(url_for('index.indexPage'))
    else:
        return redirect(url_for('index.indexPage'))
