from django.db import models

from django.db import models


class UserRegistration(models.Model):
    address = models.CharField(max_length=255)
    fullname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    high_school = models.PositiveIntegerField(null=True, blank=True)
    middle_school = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.fullname
