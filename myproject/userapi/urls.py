from django.urls import path
from .views import get_user, register_user, login_user, logout_user

urlpatterns = [
    path("user", get_user, name="get_user"),
    path("register", register_user, name="register_user"),
    path("login", login_user, name="login_user"),
    path("logout", logout_user, name="logout_user"),
]

