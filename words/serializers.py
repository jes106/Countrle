from rest_framework.serializers import ModelSerializer
from .models import Word, Country

class WordSerializer(ModelSerializer):
    class Meta:
        model = Word
        fields = ('id', 'Word','Country', 'Clue')
        read_only_fields = ('id',)

class CountrySerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'Name', 'Flag')
        read_only_fields = ('id',) 