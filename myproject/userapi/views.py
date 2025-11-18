from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserRegistration
from .serializers import UserRegistrationSerializer, UserLoginSerializer
from django.contrib.sessions.models import Session


@api_view(["POST"])
def register_user(request):
    """Register a new user with email and password"""
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        try:
            user = serializer.save()
            return Response({
                "message": "User registered successfully",
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "fullname": user.fullname
                }
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login_user(request):
    """Login user with email and password"""
    serializer = UserLoginSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    email = serializer.validated_data.get("email")
    password = serializer.validated_data.get("password")
    
    try:
        user = UserRegistration.objects.get(email=email)
    except UserRegistration.DoesNotExist:
        return Response(
            {"error": "Invalid email or password"},
            status=status.HTTP_401_UNAUTHORIZED
        )
    
    if not user.check_password(password):
        return Response(
            {"error": "Invalid email or password"},
            status=status.HTTP_401_UNAUTHORIZED
        )
    
    # Create session
    request.session["user_id"] = user.id
    request.session["user_email"] = user.email
    request.session.save()
    
    return Response({
        "message": "Login successful",
        "user": {
            "id": user.id,
            "email": user.email,
            "fullname": user.fullname,
            "sessionId": request.session.session_key
        }
    }, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_user(request):
    """Get current logged in user info"""
    user_id = request.session.get("user_id")
    
    if not user_id:
        return Response(
            {"error": "Not authenticated"},
            status=status.HTTP_401_UNAUTHORIZED
        )
    
    try:
        user = UserRegistration.objects.get(id=user_id)
        return Response({
            "id": user.id,
            "email": user.email,
            "fullname": user.fullname,
            "address": user.address,
            "phone": user.phone,
            "high_school": user.high_school,
            "middle_school": user.middle_school
        }, status=status.HTTP_200_OK)
    except UserRegistration.DoesNotExist:
        return Response(
            {"error": "User not found"},
            status=status.HTTP_404_NOT_FOUND
        )


@api_view(["POST"])
def logout_user(request):
    """Logout user and clear session"""
    if "user_id" in request.session:
        del request.session["user_id"]
        del request.session["user_email"]
        request.session.save()
    
    return Response(
        {"message": "Logout successful"},
        status=status.HTTP_200_OK
    )
