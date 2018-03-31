import json

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Permission
from django.core.validators import validate_email
from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from picarter_app.models import Profile


def index(request):
    return render(request, "index.html")


@csrf_exempt
def get_permissions(request):
    user = request.user

    if user.is_authenticated:
        permissions = [x.codename for x in Permission.objects.filter(user=user)]
        return JsonResponse({'status': True, 'permissions': permissions})

    return JsonResponse({'status': False})


@csrf_exempt
def sign_in(request):
    r = request

    body = json.loads(r.body)

    if body is None:
        return JsonResponse({'status': False})

    email = body.get('email', None)
    password = body.get('password', None)

    if email is None or password is None:
        return JsonResponse({'status': False})

    user = authenticate(username=email, password=password)

    if user is not None:
        login(request, user)
        permissions = [x.codename for x in Permission.objects.filter(user=user)]
        return JsonResponse({'status': True, 'permissions': permissions})

    return JsonResponse({'status': False})


@csrf_exempt
def check_email(request):
    if request.user.is_authenticated:
        pass

    r = request
    body = json.loads(r.body)

    if body is None:
        return JsonResponse({'status': False})

    email = body.get('email', None)

    if email is None:
        return JsonResponse({'status': False})

    try:
        validate_email(str(email))
    except Exception as e:
        return JsonResponse({'status': False})

    if not Profile.objects.filter(email=str(email)).exists():
        r.session['email'] = str(email)
        return JsonResponse({'status': True})

    return JsonResponse({'status': False})


@csrf_exempt
def register(request):
    r = request
    email = r.session.get('email', None)

    body = json.loads(r.body)

    if body is None:
        return JsonResponse({'status': False})

    password = body.get('password', None)

    if password is None:
        return JsonResponse({'status': False})

    user = Profile.objects.create_user(email, email, password)
    permission = Permission.objects.get(name='Show user view')
    user.user_permissions.add(permission)
    user.save()

    return JsonResponse({'status': True})


def logout_user(request):
    logout(request)
    return JsonResponse({'status': True})
