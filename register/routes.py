from flask import Blueprint, render_template, request, session, redirect, url_for
from MySQLPackage import *
register = Blueprint(
    "register",
    __name__,
    static_folder="static"
)

Connection = Connection(
    host="127.0.0.1",
    username="Noah721",
    password="Satchel21",
    databaseName="testdb"
)

def Start():
    Connection.run()
    Database = Connection.getDatabase()
    Cursor = Connection.getCursor()
    return Database, Cursor


@register.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        Database, Cursor = Start()

        Users = Read(Database=Database, Cursor=Cursor, table="Users")
        for User in Users:
            if 'username' in request.form and 'password' in request.form:
                if User[1] == request.form['username'] and User[2] == request.form['password']:
                    session['loggedIn'] = "true"
                    session['username'] = request.form['username']
                    session['password'] = request.form['password']
                    return redirect(url_for('index.indexPage',
                    loggedIn=('true' if 'loggedIn' in session else 'false'),
                    username=(session['username'] if 'username' in session else '')))
        Create(
            Database=Database,
            Cursor=Cursor,
            table="Users",
            dict={
                'username': request.form['username'],
                'password': request.form['password']
            }
        )
        session['loggedIn'] = "true"
        session['username'] = request.form['username']
        session['password'] = request.form['password']
        return redirect(url_for('index.indexPage',
            loggedIn=('true' if 'loggedIn' in session else 'false'),
            username=(session['username'] if 'username' in session else '')))
    return render_template('pages/register.html', username=(session['username'] if 'username' in session else ''))
