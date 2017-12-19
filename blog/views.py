from django.shortcuts import render
from django.template.response import TemplateResponse
from .models import Apartament
def post_list(request):
    data = Apartament.objects.all()
    return TemplateResponse(request, 'blog/index.html', {"data":data})
    #return render(request, 'blog/index.html', {})
def room_list(request):
    return render(request, 'blog/room.html', {})
def payment_list(request):
    return render(request, 'blog/payment.html', {})
# Create your views here.
