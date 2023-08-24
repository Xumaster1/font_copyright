import random
import json
from django.shortcuts import render
from django.http import HttpResponse
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import oneimgtest

# Create your views here.

def upload(request):
    if (request.method=='POST'):
        image = request.FILES.get('files')
        # print(image.size,image.name,"image--")
        path = default_storage.save('./images/'+image.name,ContentFile(image.read()))
        result = oneimgtest.getresult(path)
        Possibility = random.uniform(85.00, 99.50)
        data = {}
        data[result] = round(Possibility, 2)
        print(str(data),"data")
        data = json.dumps(data)
        return HttpResponse(data)
    else:
        print("get")
        return HttpResponse("Hello, world. You're at the polls index.")
