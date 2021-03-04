from flask import Blueprint, render_template, session, request, redirect, url_for
from MySQLPackage import *
index = Blueprint(
    "index",
    __name__
)

Connection = Connection(
    host="127.0.0.1",
    username="Noah721",
    password="Satchel21",
    databaseName="testdbReal"
)

def Start():
    Connection.run()
    Database = Connection.getDatabase()
    Cursor = Connection.getCursor()
    return Database, Cursor


@index.route('/Api/<Option>', methods=["GET", "POST"])
def Api(Option):
    Database, Cursor = Start()
    if request.method == "POST":
        if Option == "Read":
            Resp = Read(Database=Database, Cursor=Cursor, table="PostData")
            return {'Response': Resp[-10:][::-1]}
        return {}
    return {}

@index.route('/', methods=["GET", "POST"])
def indexPage():
    if request.method == "POST":
        Database, Cursor = Start()
        if 'NewPost' in request.form:
            PostText = request.form['NewPost']

            Users = Read(Database=Database, Cursor=Cursor, table="Users")
            for User in Users:
                if 'username' in session and 'password' in session:
                    if (User[1] == session['username']) and (User[2] == session['password']):
                        UserID = User[0]
                        Create(Database=Database, Cursor=Cursor, table="PostData", dict={'PostText': PostText, 'UserID': UserID})
                else:
                    return redirect(url_for('register.index'))
            return render_template(
                'pages/index.html',
                loggedIn=('true' if 'loggedIn' in session else 'false'),
                username=(session['username'] if 'username' in session else '')
            )


    return render_template(
        'pages/index.html',
        loggedIn=('true' if 'loggedIn' in session else 'false'),
        username=(session['username'] if 'username' in session else '')
    )
