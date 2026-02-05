from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.utils import timezone


class UserRegistration(models.Model):
    address = models.CharField(max_length=255)
    fullname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=255)  # Will store hashed password
    high_school = models.PositiveIntegerField(null=True, blank=True)
    middle_school = models.PositiveIntegerField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def set_password(self, raw_password):
        """Hash and set the password"""
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        """Check if provided password matches the hashed password"""
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.fullname


