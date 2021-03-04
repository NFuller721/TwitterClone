from functools import wraps
from flask import session, render_template
## Log in required decorator
def loggedIn(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'loggedIn' not in session:
            return render_template("home.html")
        return f(*args, **kwargs)
    return decorated_function
