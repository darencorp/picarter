from django.conf import settings


class UserCookieMiddleWare(object):
    """
    Middleware to set user cookie
    If user is authenticated and there is no cookie, set the cookie,
    If the user is not authenticated and the cookie remains, delete it
    """

    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_response(request)

        if request.user.is_authenticated and not request.COOKIES.get('user'):
            response.set_cookie("user", True)
        elif not request.user.is_authenticated and request.COOKIES.get('user'):
            # else if if no user and cookie remove user cookie, logout
            response.delete_cookie("user")
        return response
