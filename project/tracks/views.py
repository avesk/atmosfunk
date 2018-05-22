from django.shortcuts import render
from tracks.models import Track
from tracks.serializers import TrackSerializer
from rest_framework import generics

# handles GET and POST requests to Track models
class TrackListCreate(generics.ListCreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
