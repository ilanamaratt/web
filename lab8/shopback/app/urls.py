from django.urls import path, re_path
from app.views import  prod_det, product_list
urlpatterns=[
    path('products/', product_list),
    path('products/<int:id>/', prod_det),
]