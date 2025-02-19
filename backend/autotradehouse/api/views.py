# api/views.py
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, logout

def home(request):
    return HttpResponse("Welcome to Auto Trade House!")

@api_view(['POST'])
def register_view(request):
    print("Received request:", request.data)  # Debugging line
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'id': user.id, 'username': user.username}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_view(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)  # Log the user in and create a session
            return Response({'id': user.id, 'username': user.username}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def account_view(request):
    user = request.user
    user_data = {
        'username': user.username,
        'email': user.email,
        'balance': 0,  
        'listings': [
            {'id': 1, 'title': 'Car Listing 1'},
            {'id': 2, 'title': 'Car Listing 2'},
        ],
        'messages': [
            {'id': 1, 'content': 'Message 1'},
            {'id': 2, 'content': 'Message 2'},
        ],
    }
    return Response(user_data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    logout(request)  # Log the user out and clear the session
    return Response({'message': 'Successfully logged out.'}, status=200)