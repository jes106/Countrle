from django.db import models

# Create your models here.
class Country(models.Model):
    _id = models.BinaryField()
    Name = models.CharField(default='nulo', max_length=200)
    Flag = models.CharField(default='nulo', max_length=4000)

class Word(models.Model):
    _id = models.BinaryField()
    Word = models.CharField(max_length=5)
    Country = models.BinaryField()
    Clue = models.CharField(max_length=400)


    
