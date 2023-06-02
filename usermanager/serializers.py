from rest_framework.serializers import ModelSerializer
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password','last_login', 'is_superuser', 'username', 'last_name' , 'email' , 'is_staff' , 'is_active' , 'date_joined', 'first_name')
        read_only_fields = ('id', 'last_login', 'is_superuser', 'is_staff', 'is_active', 'date_joined')