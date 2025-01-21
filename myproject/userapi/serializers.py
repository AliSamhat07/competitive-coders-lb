from rest_framework import serializers
from .models import UserRegistration

from rest_framework import serializers
from .models import (
    UserRegistration,
)  # Import your UserRegistration model or a custom model if applicable


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRegistration
        fields = [
            "address",
            "fullname",
            "email",
            "phone",
            "high_school",
            "middle_school",
        ]
        extra_kwargs = {
            "email": {"required": True},
            "fullname": {"required": True},
            "phone": {"required": True},
            "high_school": {"required": False},
            "middle_school": {"required": False},
            "address": {"required": True},
        }

    def validate_phone(self, value):
        if len(value) < 8 or not value.isdigit():
            raise serializers.ValidationError("Phone number must be at least 8 digits.")
        return value
