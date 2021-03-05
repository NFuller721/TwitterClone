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
    databaseName="TwitterClone3Real"
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
                Database.close()
                return {'Response': User}
            if 'Follow' in request.form:
                Database, Cursor = Start()
                id = request.form['UserID']
                if 'id' in session:
                    if Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5] is None:
                        Update(Database=Database, Cursor=Cursor, table="Users", id=session['id'], dict={"following": f"{id}"})
                    else:
                        Following = Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5]
                        Following = Following.split(',')

                        allFollowing = ','.join(Following + [f"{id}"])

                        Update(Database=Database, Cursor=Cursor, table="Users", id=session['id'], dict={"following": allFollowing})

                return {'Error': 'Not Logged In'}
            if 'Unfollow' in request.form:
                Database, Cursor = Start()
                id = request.form['UserID']
                if 'id' in session:
                    if Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5] is None:
                        return {"Error": "Not following"}
                    else:
                        Following = Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5]
                        Following = Following.split(',')

                        if id in Following:
                            Following.remove(id)
                            Update(Database=Database, Cursor=Cursor, table="Users", id=session['id'], dict={"following": ','.join(Following)})
                            return {"Response": "removed"}
                        else:
                            return {"Error": "Not following"}


                return {'Error': 'Not Logged In'}
            if 'Following' in request.form:
                Database, Cursor = Start()
                id = request.form['UserID']
                if id == 'All':
                    if Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5] is None:
                        return {"Response": "No"}
                    else:
                        Following = Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5]
                        Following = Following.split(',')

                        return {"Response": Following}
                else:
                    if 'id' in session:
                        if Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5] is None:
                            return {"Response": "No"}
                        else:
                            Following = Read(Database=Database, Cursor=Cursor, table="Users", id=session['id'])[0][5]
                            Following = Following.split(',')

                            if id in Following:
                                return {"Response": "Yes"}
                            return {"Response": "No"}
                        return {"Response": "Other"}
                    return {'Error': 'Not Logged In'}
                return {'Error': 'Something is wrong'}
            if 'ReadAll' in request.form:
                Database, Cursor = Start()
                Users = Read(Database=Database, Cursor=Cursor, table="Users", columns=["id", "username"])
                Database.close()
                return {'Response': Users}
            return {'Response': 'No response'}
        return {'Response': 'No request'}
    return {'Error': 'Wrong key'}


@user.route('/<userid>', methods=["GET", "POST"])
def index(userid):
    if 'id' in session:
        if str(userid) == str(session['id']):
            return render_template('pages/my-user.html', user=userid)
        return render_template('pages/user.html', user=userid)
    return render_template('pages/user.html', user=userid)

@user.route('/editUser', methods=["GET", "POST"])
def edit():
    if 'id' in session:
        if request.method == "POST":
            return render_template('pages/my-user-edit.html')
        return render_template('pages/my-user-edit.html')
    return redirect(url_for('index.indexPage'))
