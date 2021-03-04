from flask import Blueprint, render_template, request, redirect, url_for, session
from MySQLPackage import *
user = Blueprint(
    "user",
    __name__,
    static_folder='static',
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

@user.route('/<userid>', methods=["GET", "POST"])
def index(userid):
    if str(userid) == str(session['id']):
        if request.method == "POST":
            return render_template('pages/my-user.html')
        return render_template('pages/my-user.html')
    return render_template('pages/user.html')
