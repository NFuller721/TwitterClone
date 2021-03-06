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
    databaseName="TwitterClone3Real"
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
                    session['id'] = User[0]
                    return redirect(url_for('index.indexPage'))
        Create(
            Database=Database,
            Cursor=Cursor,
            table="Users",
            dict={
                'username': request.form['username'],
                'password': request.form['password'],
            }
        )
        Users = Read(
            Database=Database,
            Cursor=Cursor,
            table="Users",
        )
        for User in Users:
            if User[1] == request.form['username'] and User[2] == request.form['password']:
                Update(
                    Database=Database,
                    Cursor=Cursor,
                    table="Users",
                    id=User[0],
                    dict={
                        'following': f"{User[0]}"
                    }
                )
                session['loggedIn'] = "true"
                session['username'] = request.form['username']
                session['password'] = request.form['password']
                session['id'] = User[0]
        return redirect(url_for('user.index', userid=session['id']))
    return render_template('pages/register.html')
