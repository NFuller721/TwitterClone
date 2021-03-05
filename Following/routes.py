from flask import Blueprint, render_template, session, request, redirect, url_for
from MySQLPackage import *
Following = Blueprint(
    "Following",
    __name__,
    static_folder="static"
)

Connection = Connection(
    host="127.0.0.1",
    username="Noah721",
    password="Satchel21",
    databaseName="TwitterClone"
)

def Start():
    Connection.run()
    Database = Connection.getDatabase()
    Cursor = Connection.getCursor()
    return Database, Cursor


@Following.route('/Api/<Option>', methods=["GET", "POST"])
def Api(Option):
    Database, Cursor = Start()
    if request.method == "POST":
        if Option == "Read":
            Resp = Read(Database=Database, Cursor=Cursor, table="PostData")
            Users = Read(Database=Database, Cursor=Cursor, table="Users", columns=["username", "id"])
            return {'Response': {'Posts': Resp[::-1], 'Users': Users}}
        return {}
    return {}

@Following.route('/', methods=["GET", "POST"])
def index():
    return render_template('pages/following.html')
