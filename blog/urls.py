from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.post_list, name='post_list'),
    url(r'^room',views.room_list, name='room_list'),
    url(r'^payment',views.payment_list, name='payment_list'),
]
