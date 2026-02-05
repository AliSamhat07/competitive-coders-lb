from rest_framework import serializers
from .models import UserRegistration


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    confirm_password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = UserRegistration
        fields = [
            "id",
            "address",
            "fullname",
            "email",
            "password",
            "confirm_password",
            "phone",
            "high_school",
            "middle_school",
        ]
        extra_kwargs = {
            "email": {"required": True},
            "fullname": {"required": True},
            "phone": {"required": True},
            "password": {"required": True},
            "confirm_password": {"required": True},
            "high_school": {"required": False},
            "middle_school": {"required": False},
            "address": {"required": True},
        }

    def validate(self, data):
        """Validate that passwords match"""
        if data.get("password") != data.get("confirm_password"):
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return data

    def validate_phone(self, value):
        if len(value) < 8 or not value.isdigit():
            raise serializers.ValidationError("Phone number must be at least 8 digits.")
        return value

    def create(self, validated_data):
        """Hash password before saving"""
        validated_data.pop("confirm_password")
        user = UserRegistration(**validated_data)
        user.set_password(validated_data.get("password"))
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    """Serializer for user login"""
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

