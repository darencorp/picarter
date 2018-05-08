"""picarter URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from picarter_app import views

urlpatterns = [
    path('', views.index),
    path('permissions', views.get_permissions),
    path('login', views.sign_in),
    path('check_email', views.check_email),
    path('register', views.register),
    path('logout', views.logout_user),
    path('change_avatar', views.change_avatar),
    path('change_name', views.change_name),
    path('user', views.user),
    path('admin/', admin.site.urls)
]
