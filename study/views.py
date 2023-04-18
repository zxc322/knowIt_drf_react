from rest_framework import generics, permissions
from .models import Course
from .serializers import CoursesSerializer


class CoursesAPIView(generics.ListAPIView):
    """ Courses list """

    serializer_class = CoursesSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Course.objects.all()