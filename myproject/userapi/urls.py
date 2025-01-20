from django.urls import path
from .views import get_user, register_user

urlpatterns = [
    path("user", get_user, name="get_user"),
    path("register", register_user, name="register_user"),
]
