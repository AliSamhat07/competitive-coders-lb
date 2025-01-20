from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserRegistration
from .serializers import UserRegistrationSerializer


@api_view(["GET"])
def get_user(request):
    # Dummy implementation for authenticated user check
    return Response({"message": "User is authenticated"}, status=200)


@api_view(["POST"])
def register_user(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=201)
    return Response(serializer.errors, status=400)
