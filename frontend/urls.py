from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login/', index),
    path('contacts/', index),
    path('price/', index),
    path('courses/', index),
]