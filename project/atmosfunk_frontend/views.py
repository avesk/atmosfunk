from django.shortcuts import render

def index(request):
    return render(request, 'atmosfunk_frontend/index.html')
