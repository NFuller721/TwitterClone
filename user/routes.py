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
    databaseName="TwitterClone"
)

def Start():
    Connection.run()
    Database = Connection.getDatabase()
    Cursor = Connection.getCursor()
    return Database, Cursor

@user.route('/Api/<key>', methods=["GET", "POST"])
def Api(key):
    if key == "1234567876543":
        if request.method == "POST":
            if 'Update' in request.form:
                Database, Cursor = Start()
                id = session['id']
                Name = request.form['Name']
                Description = request.form['Description']

                Update(Database=Database, Cursor=Cursor, table="Users", id=id, dict={'Name': Name, 'Description': Description})
                User = Read(Database=Database, Cursor=Cursor, table="Users", id=id)
                return {'Response': User}
            if 'Read' in request.form:
                Database, Cursor = Start()
                id = request.form['UserID']

                User = Read(Database=Database, Cursor=Cursor, table="Users", id=int(id))[0]
                print(User)
                return {'Response': User}
            return {'Response': 'No response'}
        return {'Response': 'No request'}
    return {'Error': 'Wrong key'}


@user.route('/<userid>', methods=["GET", "POST"])
def index(userid):
    if 'id' in session:
        if str(userid) == str(session['id']):
            if request.method == "POST":
                return render_template('pages/my-user.html')
            return render_template('pages/my-user.html')
        return render_template('pages/user.html', user=userid)
    return render_template('pages/user.html', user=userid)
