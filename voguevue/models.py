from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=122)
    email = models.EmailField(max_length=122)
    subject = models.CharField(max_length=50)
    message = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.name

class updatemail(models.Model):
    emailadd = models.EmailField(max_length=100)

    def __str__(self):
        return self.emailadd

class register_table(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    contact_number = models.IntegerField()

    def __str__(self):
        return self.user.username