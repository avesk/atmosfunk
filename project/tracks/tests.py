from django.test import TestCase
from tracks.models import Track

class TrackTestCase(TestCase):

    def setUp(self):
        Track.objects.create(title="Gucc", duration=4.32)

    def test_track_str_equals_title(self):
        Gucc = Track.objects.get(title="Gucc")
        self.assertEqual(str(Gucc), "Gucc")
