from django.db import models

class Track(models.Model):
    # track_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    trackFile = models.FileField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
