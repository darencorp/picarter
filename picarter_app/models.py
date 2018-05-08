from django.db import models
from django.contrib.auth.models import User, AbstractUser

# Create your models here.


class Profile(AbstractUser):
    class Meta:
        permissions = (
            ("user_view", "Show user view"),
        )

    avatar = models.CharField(max_length=200, default='')


class Album(models.Model):
    name = models.CharField(max_length=120)
