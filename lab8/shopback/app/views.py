from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from django.http.request import HttpRequest
from datetime import datetime
# Create your views here.
products=[
    {
        'id':i,
        'price':i+10.5,
        'describtion':f'This is describtion of product {i}',
        'count':i+1,
        'is_active':True
    }
    for i in range(1,20)
]
category = [
    {
        'id':i,
        'name':'album {i}'
    }
    for i in range(1,20)
]

def product_list(request):
    return JsonResponse(products, safe=False)

def prod_det(request, id):
    for p in products:
        if p['id'] == id:
            return JsonResponse(p)
    return JsonResponse({'message':'Product is not found!'})

def categ_list(request):
    return JsonResponse(category, safe=False)

def categ_det(request, id):
    for c in category:
        if c['id'] == id:
            return JsonResponse(c)
    return JsonResponse({'message':'Category is not found!'})