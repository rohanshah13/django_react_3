from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os
# Create your views here.

def index(request):
	return render(request, 'index.html')

def room(request, room_name):
	return render(request, 'room.html', {
		'room_name_json' : mark_safe(json.dumps(room_name))
	})

class ReactAppView(View):

	def get(self, request):
		try:

			with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
				return HttpResponse(file.read())

		except :
			return HttpResponse(
				"""
				index.html not found ! build your React app !!
				""",
				status=501,
			)